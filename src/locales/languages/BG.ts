export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Отворете настройките',
      },
      version: {
        label: 'Версия',
      },
      restartApp: {
        label: 'Рестартирайте приложението',
      },
      quit: {
        label: 'Изход',
      },
    },
  },
  settings: {
    title: 'Настройки на приложението',
    menu: {
      general: {
        title: 'Общи',
        options: {
          application: {
            title: 'Настройки на приложението',
            autoStart: {
              name: 'Автоматично стартиране при стартиране',
            },
            closeSettings: {
              name: 'Затваряне на настройките',
              options: {
                minimize: 'Минимизиране в лентата с икони',
                exit: 'Изход от приложението',
              },
            },
          },
          appearance: {
            title: 'Настройки на външния вид',
            language: {
              name: 'Език',
            },
            theme: {
              name: 'Тема',
              options: {
                system: 'Следвай системата',
                light: 'Светъл режим',
                dark: 'Тъмен режим',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Пряк път',
        options: {
          shortcuts: {
            name: 'Пряк път',
            placeholder: 'Натиснете клавишната комбинация',
            options: {
              openTranslate: {
                name: 'Отворете прозореца за превод',
              },
              openSettings: {
                name: 'Отворете основната панел',
              },
            },
          },
        },
      },
      service: {
        title: 'Услуга',
        options: {
          service: {
            name: 'Услуга',
            options: {
              APIURL: {
                name: 'API адрес',
              },
            },
          },
        },
      },
      about: {
        title: 'Относно',
        options: {
          about: {
            name: 'Относно приложението',
            options: {
              application: {
                version: 'Версия: ',
              },
              openSource: {
                name: 'Линк към отворен код',
                button: 'Докладвай проблем',
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
        name: 'Други опции',
      },
      read: {
        original: 'Прочетете оригинала',
        translation: 'Прочетете превода',
      },
      copy: {
        tips: 'Копиране в клипборда',
      },
    },
  },
}
