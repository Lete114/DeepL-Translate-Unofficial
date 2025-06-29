export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Otvoriť nastavenia',
      },
      version: {
        label: 'Verzia',
      },
      restartApp: {
        label: 'Reštartovať aplikáciu',
      },
      quit: {
        label: 'Ukončiť',
      },
    },
  },
  settings: {
    title: 'Nastavenia aplikácie',
    menu: {
      general: {
        title: 'Všeobecné',
        options: {
          application: {
            title: 'Nastavenia aplikácie',
            autoStart: {
              name: 'Automatické spustenie pri štarte systému',
            },
            closeSettings: {
              name: 'Zatvoriť nastavenia',
              options: {
                minimize: 'Minimalizovať do systémovej lišty',
                exit: 'Ukončiť aplikáciu',
              },
            },
          },
          appearance: {
            title: 'Nastavenia vzhľadu',
            language: {
              name: 'Jazyk',
            },
            theme: {
              name: 'Téma',
              options: {
                system: 'Podľa nastavení systému',
                light: 'Svetlý režim',
                dark: 'Tmavý režim',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Skratky',
        options: {
          shortcuts: {
            name: 'Skratky',
            placeholder: 'Stlačte klávesovú skratku',
            options: {
              openTranslate: {
                name: 'Otvoriť okno prekladov',
              },
              openSettings: {
                name: 'Otvoriť hlavný panel',
              },
            },
          },
        },
      },
      service: {
        title: 'Služba',
        options: {
          service: {
            name: 'Služba',
            options: {
              APIURL: {
                name: 'Adresa API',
              },
            },
          },
        },
      },
      about: {
        title: 'O aplikácii',
        options: {
          about: {
            name: 'O aplikácii',
            options: {
              application: {
                version: 'Verzia: ',
              },
              openSource: {
                name: 'Odkaz na otvorený zdrojový kód',
                button: 'Nahlásiť problém',
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
        name: 'Iné možnosti',
      },
      read: {
        original: 'Prečítať originál',
        translation: 'Prečítať preklad',
      },
      copy: {
        tips: 'Kopírovať do schránky',
      },
    },
  },
}
