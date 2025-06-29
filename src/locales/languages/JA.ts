export default {
  tray: {
    menu: {
      openSettings: {
        label: '設定を開く',
      },
      version: {
        label: 'バージョン',
      },
      restartApp: {
        label: 'アプリを再起動',
      },
      quit: {
        label: '終了',
      },
    },
  },
  settings: {
    title: 'アプリ設定',
    menu: {
      general: {
        title: '一般',
        options: {
          application: {
            title: 'アプリ設定',
            autoStart: {
              name: '起動時に自動起動',
            },
            closeSettings: {
              name: '設定を閉じる',
              options: {
                minimize: 'トレイに最小化',
                exit: 'アプリを終了',
              },
            },
          },
          appearance: {
            title: '外観の設定',
            language: {
              name: '言語',
            },
            theme: {
              name: 'テーマ',
              options: {
                system: 'システムに従う',
                light: 'ライトモード',
                dark: 'ダークモード',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'ショートカット',
        options: {
          shortcuts: {
            name: 'ショートカット',
            placeholder: 'キーボードショートカットを押してください',
            options: {
              openTranslate: {
                name: '翻訳ウィンドウを開く',
              },
              openSettings: {
                name: 'メインパネルを開く',
              },
            },
          },
        },
      },
      service: {
        title: 'サービス',
        options: {
          service: {
            name: 'サービス',
            options: {
              APIURL: {
                name: 'API URL',
              },
            },
          },
        },
      },
      about: {
        title: 'アプリについて',
        options: {
          about: {
            name: 'アプリについて',
            options: {
              application: {
                version: 'バージョン: ',
              },
              openSource: {
                name: 'オープンソースリンク',
                button: '問題を報告',
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
        name: 'その他のオプション',
      },
      read: {
        original: '原文を読む',
        translation: '翻訳を読む',
      },
      copy: {
        tips: 'クリップボードにコピー',
      },
    },
  },
}
