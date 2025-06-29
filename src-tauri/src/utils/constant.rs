// 设置窗口的label
pub static SETTINGS_WINDOW_LABEL: &str = "settings";
// 弹窗窗口的label
pub static POPUP_WINDOW_LABEL: &str = "popup";

// 键值对 KEY
pub static STORE_SETTINGS_KEY: &str = "settings";
pub static STORE_TRANSLATE_KEY: &str = "translate";

// 键值对存储位置
// dev 模式下使用 dev.json 后缀
#[cfg(any(dev, debug_assertions))]
pub static STORE_SETTINGS_PATH: &str = "stores/.settings.dev.json";
#[cfg(any(dev, debug_assertions))]
pub static STORE_TRANSLATE_PATH: &str = "stores/.translate.dev.json";

// 非 dev 模式下使用正式路径
#[cfg(not(any(dev, debug_assertions)))]
pub static STORE_SETTINGS_PATH: &str = "stores/.settings.json";
#[cfg(not(any(dev, debug_assertions)))]
pub static STORE_TRANSLATE_PATH: &str = "stores/.translate.json";
