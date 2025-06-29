use serde::{Deserialize, Serialize};

/// 应用程序的通用设置
/// 包括自动启动、关闭设置、语言和主题等配置。
#[derive(Debug, Serialize, Deserialize)]
pub struct GeneralSettings {
    #[serde(rename = "autoStart")]
    pub auto_start: bool,
    #[serde(rename = "closeSettings")]
    pub close_settings: String,
    pub language: String,
    pub theme: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ShortcutsSettings {
    #[serde(rename = "openTranslate")]
    pub open_translate: String,
    #[serde(rename = "openSettings")]
    pub open_settings: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ServiceSettings {
    pub url: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StoreSettings {
    pub general: GeneralSettings,
    pub shortcuts: ShortcutsSettings,
    pub service: ServiceSettings,
}

/// DeeplX API 响应结构体
#[derive(Debug, Serialize, Deserialize)]
pub struct TranslationApiResponse {
    pub code: u16,
    pub id: u64,
    pub method: String,
    pub from: String,
    pub to: String,
    pub source_lang: String,
    pub target_lang: String,
    pub data: String,
    pub alternatives: Vec<String>,
}

/// command 发送给前端的翻译结果数据结构
#[derive(Debug, Serialize, Deserialize)]
pub struct TranslationResult {
    pub text: String,
    pub alternatives: Vec<String>,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct TranslationResultError {
    pub r#type: String,
    pub data: Option<serde_json::Value>,
    pub message: String,
}
