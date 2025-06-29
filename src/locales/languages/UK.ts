export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Відкрити налаштування',
      },
      version: {
        label: 'Версія',
      },
      restartApp: {
        label: 'Перезапустити додаток',
      },
      quit: {
        label: 'Вийти',
      },
    },
  },
  settings: {
    title: 'Налаштування додатка',
    menu: {
      general: {
        title: 'Загальні',
        options: {
          application: {
            title: 'Налаштування додатка',
            autoStart: {
              name: 'Автоматичний запуск під час старту системи',
            },
            closeSettings: {
              name: 'Закрити налаштування',
              options: {
                minimize: 'Згорнути в системний трей',
                exit: 'Вийти з додатка',
              },
            },
          },
          appearance: {
            title: 'Налаштування зовнішнього вигляду',
            language: {
              name: 'Мова',
            },
            theme: {
              name: 'Тема',
              options: {
                system: 'Слідувати системі',
                light: 'Світла тема',
                dark: 'Темна тема',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Комбінації клавіш',
        options: {
          shortcuts: {
            name: 'Комбінації клавіш',
            placeholder: 'Натисніть комбінацію клавіш',
            options: {
              openTranslate: {
                name: 'Відкрити вікно перекладу',
              },
              openSettings: {
                name: 'Відкрити головну панель',
              },
            },
          },
        },
      },
      service: {
        title: 'Сервіс',
        options: {
          service: {
            name: 'Сервіс',
            options: {
              APIURL: {
                name: 'API-адреса',
              },
            },
          },
        },
      },
      about: {
        title: 'Про додаток',
        options: {
          about: {
            name: 'Про додаток',
            options: {
              application: {
                version: 'Версія: ',
              },
              openSource: {
                name: 'Посилання на відкритий код',
                button: 'Повідомити про помилку',
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
        name: 'Інші параметри',
      },
      read: {
        original: 'Прочитати оригінал',
        translation: 'Прочитати переклад',
      },
      copy: {
        tips: 'Скопіювати в буфер обміну',
      },
    },
  },
}
