export interface ISettings {
  general: {
    autoStart: boolean
    closeSettings: string
    language: string
    theme: string
  }
  shortcuts: {
    openTranslate: string
    openSettings: string
  }
  service: {
    url: string
  }
}
