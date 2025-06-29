export default {
  tray: {
    menu: {
      openSettings: {
        label: '打開設定',
      },
      version: {
        label: '版本',
      },
      restartApp: {
        label: '重新啟動應用',
      },
      quit: {
        label: '退出',
      },
    },
  },
  settings: {
    title: '應用設定',
    menu: {
      general: {
        title: '一般',
        options: {
          application: {
            title: '應用設定',
            autoStart: {
              name: '開機自啟',
            },
            closeSettings: {
              name: '關閉設定',
              options: {
                minimize: '最小化到系統匣',
                exit: '退出應用',
              },
            },
          },
          appearance: {
            title: '外觀設定',
            language: {
              name: '語言',
            },
            theme: {
              name: '主題',
              options: {
                system: '跟隨系統',
                light: '淺色模式',
                dark: '深色模式',
              },
            },
          },
        },
      },
      shortcuts: {
        title: '快捷鍵',
        options: {
          shortcuts: {
            name: '快捷鍵',
            placeholder: '請按下快捷鍵',
            options: {
              openTranslate: {
                name: '打開翻譯視窗',
              },
              openSettings: {
                name: '打開主面板',
              },
            },
          },
        },
      },
      service: {
        title: '服務',
        options: {
          service: {
            name: '服務',
            options: {
              APIURL: {
                name: 'APIURL',
              },
            },
          },
        },
      },
      about: {
        title: '關於',
        options: {
          about: {
            name: '關於應用',
            options: {
              application: {
                version: '版本：',
              },
              openSource: {
                name: '開源連結',
                button: '回報問題',
              },
            },
          },
        },
      },
    },
  },
  popup: {
    footer: {
      otherOption: {
        name: '其他選項',
      },
      read: {
        original: '朗讀原文',
        translation: '朗讀譯文',
      },
      copy: {
        tips: '複製到剪貼簿',
      },
    },
  },
}
