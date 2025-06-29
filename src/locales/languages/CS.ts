export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Otevřít nastavení',
      },
      version: {
        label: 'Verze',
      },
      restartApp: {
        label: 'Restartovat aplikaci',
      },
      quit: {
        label: 'Ukončit',
      },
    },
  },
  settings: {
    title: 'Nastavení aplikace',
    menu: {
      general: {
        title: 'Obecné',
        options: {
          application: {
            title: 'Nastavení aplikace',
            autoStart: {
              name: 'Automatické spuštění při startu',
            },
            closeSettings: {
              name: 'Zavřít nastavení',
              options: {
                minimize: 'Minimalizovat do systémové lišty',
                exit: 'Ukončit aplikaci',
              },
            },
          },
          appearance: {
            title: 'Nastavení vzhledu',
            language: {
              name: 'Jazyk',
            },
            theme: {
              name: 'Téma',
              options: {
                system: 'Následovat systém',
                light: 'Světlý režim',
                dark: 'Tmavý režim',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Zkratky',
        options: {
          shortcuts: {
            name: 'Zkratky',
            placeholder: 'Stiskněte klávesovou zkratku',
            options: {
              openTranslate: {
                name: 'Otevřít okno pro překlad',
              },
              openSettings: {
                name: 'Otevřít hlavní panel',
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
        title: 'O aplikaci',
        options: {
          about: {
            name: 'O aplikaci',
            options: {
              application: {
                version: 'Verze: ',
              },
              openSource: {
                name: 'Odkaz na otevřený kód',
                button: 'Nahlásit problém',
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
        name: 'Další možnosti',
      },
      read: {
        original: 'Přečíst originál',
        translation: 'Přečíst překlad',
      },
      copy: {
        tips: 'Zkopírovat do schránky',
      },
    },
  },
}
