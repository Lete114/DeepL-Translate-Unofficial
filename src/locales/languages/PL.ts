export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Otwórz ustawienia',
      },
      version: {
        label: 'Wersja',
      },
      restartApp: {
        label: 'Uruchom ponownie aplikację',
      },
      quit: {
        label: 'Zakończ',
      },
    },
  },
  settings: {
    title: 'Ustawienia aplikacji',
    menu: {
      general: {
        title: 'Ogólne',
        options: {
          application: {
            title: 'Ustawienia aplikacji',
            autoStart: {
              name: 'Automatyczne uruchamianie przy starcie',
            },
            closeSettings: {
              name: 'Zamknij ustawienia',
              options: {
                minimize: 'Minimalizuj do zasobnika systemowego',
                exit: 'Zakończ aplikację',
              },
            },
          },
          appearance: {
            title: 'Ustawienia wyglądu',
            language: {
              name: 'Język',
            },
            theme: {
              name: 'Motyw',
              options: {
                system: 'Podążaj za ustawieniami systemu',
                light: 'Tryb jasny',
                dark: 'Tryb ciemny',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Skróty klawiszowe',
        options: {
          shortcuts: {
            name: 'Skróty klawiszowe',
            placeholder: 'Naciśnij skrót klawiaturowy',
            options: {
              openTranslate: {
                name: 'Otwórz okno tłumaczenia',
              },
              openSettings: {
                name: 'Otwórz główny panel',
              },
            },
          },
        },
      },
      service: {
        title: 'Usługa',
        options: {
          service: {
            name: 'Usługa',
            options: {
              APIURL: {
                name: 'Adres API',
              },
            },
          },
        },
      },
      about: {
        title: 'O aplikacji',
        options: {
          about: {
            name: 'O aplikacji',
            options: {
              application: {
                version: 'Wersja: ',
              },
              openSource: {
                name: 'Link do otwartego kodu',
                button: 'Zgłoś problem',
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
        name: 'Inne opcje',
      },
      read: {
        original: 'Przeczytaj oryginał',
        translation: 'Przeczytaj tłumaczenie',
      },
      copy: {
        tips: 'Skopiuj do schowka',
      },
    },
  },
}
