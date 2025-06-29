pub mod constant;
pub mod structs;

pub fn is_http_url(url: &str) -> bool {
    url.starts_with("http://") || url.starts_with("https://")
}
