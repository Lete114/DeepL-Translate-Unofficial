export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Открыть настройки',
      },
      version: {
        label: 'Версия',
      },
      restartApp: {
        label: 'Перезапустить приложение',
      },
      quit: {
        label: 'Выйти',
      },
    },
  },
  settings: {
    title: 'Настройки приложения',
    menu: {
      general: {
        title: 'Основные',
        options: {
          application: {
            title: 'Настройки приложения',
            autoStart: {
              name: 'Автозапуск при старте системы',
            },
            closeSettings: {
              name: 'Закрыть настройки',
              options: {
                minimize: 'Свернуть в системный трей',
                exit: 'Выйти из приложения',
              },
            },
          },
          appearance: {
            title: 'Настройки внешнего вида',
            language: {
              name: 'Язык',
            },
            theme: {
              name: 'Тема',
              options: {
                system: 'Следовать настройкам системы',
                light: 'Светлый режим',
                dark: 'Тёмный режим',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Горячие клавиши',
        options: {
          shortcuts: {
            name: 'Горячие клавиши',
            placeholder: 'Нажмите сочетание клавиш',
            options: {
              openTranslate: {
                name: 'Открыть окно перевода',
              },
              openSettings: {
                name: 'Открыть главный панель',
              },
            },
          },
        },
      },
      service: {
        title: 'Сервис',
        options: {
          service: {
            name: 'Сервис',
            options: {
              APIURL: {
                name: 'API-адрес',
              },
            },
          },
        },
      },
      about: {
        title: 'О приложении',
        options: {
          about: {
            name: 'О приложении',
            options: {
              application: {
                version: 'Версия: ',
              },
              openSource: {
                name: 'Ссылка на открытый исходный код',
                button: 'Сообщить об ошибке',
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
        name: 'Другие варианты',
      },
      read: {
        original: 'Прочитать оригинал',
        translation: 'Прочитать перевод',
      },
      copy: {
        tips: 'Скопировать в буфер обмена',
      },
    },
  },
}
