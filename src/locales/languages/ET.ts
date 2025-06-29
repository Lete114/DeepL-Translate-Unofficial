export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Ava seaded',
      },
      version: {
        label: 'Versioon',
      },
      restartApp: {
        label: 'Taaskäivita rakendus',
      },
      quit: {
        label: 'Välju',
      },
    },
  },
  settings: {
    title: 'Rakenduse Seaded',
    menu: {
      general: {
        title: 'Üldine',
        options: {
          application: {
            title: 'Rakenduse Seaded',
            autoStart: {
              name: 'Käivita automaatselt käivitamisel',
            },
            closeSettings: {
              name: 'Sulge seaded',
              options: {
                minimize: 'Minimeeri süsteemisalve',
                exit: 'Välju rakendusest',
              },
            },
          },
          appearance: {
            title: 'Välimuse Seaded',
            language: {
              name: 'Keel',
            },
            theme: {
              name: 'Teema',
              options: {
                system: 'Järgi süsteemi seadeid',
                light: 'Heledat režiimi',
                dark: 'Tumedat režiimi',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Otseteed',
        options: {
          shortcuts: {
            name: 'Otseteed',
            placeholder: 'Palun vajutage klahvikombinatsiooni',
            options: {
              openTranslate: {
                name: 'Ava tõlkeaken',
              },
              openSettings: {
                name: 'Ava peamenüü',
              },
            },
          },
        },
      },
      service: {
        title: 'Teenuse',
        options: {
          service: {
            name: 'Teenuse',
            options: {
              APIURL: {
                name: 'API URL',
              },
            },
          },
        },
      },
      about: {
        title: 'Info',
        options: {
          about: {
            name: 'Rakenduse kohta',
            options: {
              application: {
                version: 'Versioon: ',
              },
              openSource: {
                name: 'Avatud koodiga link',
                button: 'Teata probleemist',
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
        name: 'Teised valikud',
      },
      read: {
        original: 'Loe originaali',
        translation: 'Loe tõlget',
      },
      copy: {
        tips: 'Kopeeri lõikelauale',
      },
    },
  },
}
