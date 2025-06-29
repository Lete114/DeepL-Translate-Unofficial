use log::info;
use once_cell::sync::OnceCell;
use tauri::{Window, WindowEvent};
use tauri_plugin_autostart::MacosLauncher;
use tauri_plugin_log::{fern::colors, RotationStrategy, Target, TargetKind};

mod cmds;
mod utils;

pub static APP: OnceCell<tauri::AppHandle> = OnceCell::new();

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_autostart::init(
            MacosLauncher::LaunchAgent,
            Some(vec!["--auto-launch"]),
        ))
        .plugin(
            tauri_plugin_log::Builder::new()
                .targets([
                    Target::new(TargetKind::Stdout),
                    #[cfg(any(dev, debug_assertions))]
                    Target::new(TargetKind::LogDir {
                        file_name: Some("logs.dev".into()),
                    }),
                    #[cfg(not(any(dev, debug_assertions)))]
                    Target::new(TargetKind::LogDir { file_name: None }),
                    Target::new(TargetKind::Webview),
                ])
                .with_colors(colors::ColoredLevelConfig {
                    info: colors::Color::BrightGreen,
                    trace: colors::Color::Cyan,
                    ..colors::ColoredLevelConfig::default()
                })
                .level(log::LevelFilter::Info)
                .max_file_size(50_000 /* bytes */)
                .rotation_strategy(RotationStrategy::KeepAll)
                .build(),
        )
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
            info!("{}, {argv:?}, {cwd}", app.package_info().name);
        }))
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            // system
            cmds::restart_app,
            cmds::exit_app,
            // translate
            cmds::translate_text,
            cmds::get_selection_text,
        ])
        .setup(move |app| {
            APP.get_or_init(|| app.handle().clone());

            #[cfg(any(dev, debug_assertions))]
            open_devtools();

            Ok(())
        })
        .on_window_event(on_window_event)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(any(dev, debug_assertions))]
fn open_devtools() {
    use tauri::Manager;
    use utils::constant::{POPUP_WINDOW_LABEL, SETTINGS_WINDOW_LABEL};

    let app = APP.get().unwrap();
    let settings_window = app.get_webview_window(SETTINGS_WINDOW_LABEL).unwrap();
    let popup_window = app.get_webview_window(POPUP_WINDOW_LABEL).unwrap();
    settings_window.open_devtools();
    popup_window.open_devtools();
}

// 保持前台在后台运行
fn on_window_event(window: &Window, event: &WindowEvent) {
    match event {
        tauri::WindowEvent::CloseRequested { api, .. } => {
            window.hide().unwrap();
            api.prevent_close();
        }
        _ => {}
    }
}
