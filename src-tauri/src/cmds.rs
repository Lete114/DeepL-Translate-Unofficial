use log::info;
use reqwest::Client;
use tauri::AppHandle;
use tauri_plugin_store::StoreExt;

use crate::utils::{
    constant::{STORE_SETTINGS_KEY, STORE_SETTINGS_PATH},
    is_http_url,
    structs::{StoreSettings, TranslationApiResponse, TranslationResult, TranslationResultError},
};

#[tauri::command]
pub fn restart_app(app_handle: AppHandle) {
    app_handle.restart();
}

#[tauri::command]
pub fn exit_app(app_handle: AppHandle) {
    app_handle.exit(0);
    std::process::exit(0);
}

#[tauri::command]
pub fn get_selection_text() -> String {
    use selection::get_text;
    let text = get_text();
    return text;
}

// 处理翻译逻辑，使用 POST 请求
#[tauri::command]
pub async fn translate_text(
    app_handle: AppHandle,
    text: String,
    from: String,
    to: String,
) -> Result<TranslationResult, TranslationResultError> {
    let store = app_handle.store(STORE_SETTINGS_PATH).unwrap();
    let json_value = store
        .get(STORE_SETTINGS_KEY)
        .ok_or_else(|| TranslationResultError {
            r#type: "store".to_string(),
            data: None,
            message: format!("Settings not found at key: {}", STORE_SETTINGS_KEY),
        })?;
    let settings: StoreSettings =
        serde_json::from_value(json_value).map_err(|e| TranslationResultError {
            r#type: "json".to_string(),
            data: None,
            message: format!("Failed to parse settings: {}", e),
        })?;
    let service_url = settings.service.url;

    if !is_http_url(&service_url) {
        return Err(TranslationResultError {
            r#type: "url".to_string(),
            data: None,
            message: format!("Invalid URL: {}", service_url),
        });
    }

    let client = Client::new();

    // 准备 POST 请求体
    let api_url = service_url;
    info!("API URL: {}", api_url);
    let params = serde_json::json!({
        "text": text,
        "from": from,
        "to": to,
        "source_lang": from,
        "target_lang": to,
    });

    // 发送 POST 请求到 DeepL API
    let response = client
        .post(api_url)
        .header("Content-Type", "application/json")
        .body(params.to_string())
        .send()
        .await
        .map_err(|e| TranslationResultError {
            r#type: "request".to_string(),
            data: None,
            message: format!("Failed to send request: {}", e),
        })?;

    let status = response.status();
    let response_text = response.text().await.map_err(|e| TranslationResultError {
        r#type: "response".to_string(),
        data: None,
        message: format!("Failed to read response body: {}", e),
    })?;
    info!("HTTP status: {}", status);
    info!("Raw response: {}", response_text);

    if !status.is_success() {
        let response_json: serde_json::Value =
            serde_json::from_str(&response_text).map_err(|e| TranslationResultError {
                r#type: "json".to_string(),
                data: None,
                message: format!("Failed to parse response JSON: {}", e),
            })?;
        return Err(TranslationResultError {
            r#type: "http".to_string(),
            data: Some(response_json),
            message: format!("HTTP error: {}", status),
        });
    }

    let response_json: TranslationApiResponse =
        serde_json::from_str(&response_text).map_err(|e| TranslationResultError {
            r#type: "json".to_string(),
            data: None,
            message: format!("Failed to parse response JSON: {}", e),
        })?;

    info!("Response json: {:?}", response_json);

    // 提取主要翻译结果
    let text = response_json.data;

    // 提取替代翻译
    let mut alternatives = Vec::new();
    for alt in response_json.alternatives {
        alternatives.push(alt);
    }

    let data = TranslationResult { text, alternatives };

    info!("Data: {:?}", data);
    Ok(data)
}
