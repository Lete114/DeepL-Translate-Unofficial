export default {
  tray: {
    menu: {
      openSettings: {
        label: '打开设置',
      },
      version: {
        label: '版本',
      },
      restartApp: {
        label: '重新启动应用',
      },
      quit: {
        label: '退出',
      },
    },
  },
  settings: {
    title: '应用设置',
    menu: {
      general: {
        title: '通用',
        options: {
          application: {
            title: '应用设置',
            autoStart: {
              name: '开机自启动',
            },
            closeSettings: {
              name: '关闭设置',
              options: {
                minimize: '最小化到托盘',
                exit: '退出应用',
              },
            },
          },
          appearance: {
            title: '外观设置',
            language: {
              name: '语言',
            },
            theme: {
              name: '主题',
              options: {
                system: '跟随系统',
                light: '浅色模式',
                dark: '深色模式',
              },
            },
          },
        },
      },
      shortcuts: {
        title: '快捷键',
        options: {
          shortcuts: {
            name: '快捷键',
            placeholder: '请按键盘快捷键',
            options: {
              openTranslate: {
                name: '打开翻译窗口',
              },
              openSettings: {
                name: '打开主面板',
              },
            },
          },
        },
      },
      service: {
        title: '服务',
        options: {
          service: {
            name: '服务',
            options: {
              APIURL: {
                name: 'APIURL',
              },
            },
          },
        },
      },
      about: {
        title: '关于',
        options: {
          about: {
            name: '关于软件',
            options: {
              application: {
                version: '版本: ',
              },
              openSource: {
                name: '开源地址',
                button: '反馈问题',
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
        name: '其他选项',
      },
      read: {
        original: '朗读原文',
        translation: '朗读译文',
      },
      copy: {
        tips: '复制到剪贴板',
      },
    },
  },
}
