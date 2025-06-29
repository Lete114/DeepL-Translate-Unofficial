export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Atidaryti Nustatymus',
      },
      version: {
        label: 'Versija',
      },
      restartApp: {
        label: 'Perkrauti Programą',
      },
      quit: {
        label: 'Išeiti',
      },
    },
  },
  settings: {
    title: 'Programos Nustatymai',
    menu: {
      general: {
        title: 'Bendrieji',
        options: {
          application: {
            title: 'Programos Nustatymai',
            autoStart: {
              name: 'Automatinis Paleidimas Paleidus',
            },
            closeSettings: {
              name: 'Uždaryti Nustatymus',
              options: {
                minimize: 'Sumažinti į Dėklą',
                exit: 'Išeiti iš Programos',
              },
            },
          },
          appearance: {
            title: 'Išvaizdos Nustatymai',
            language: {
              name: 'Kalba',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Sekti Sistemos Nustatymus',
                light: 'Šviesus Režimas',
                dark: 'Tamsus Režimas',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Spartieji Klavišai',
        options: {
          shortcuts: {
            name: 'Spartieji Klavišai',
            placeholder: 'Paspauskite klavišų kombinaciją',
            options: {
              openTranslate: {
                name: 'Atidaryti Vertimo Langą',
              },
              openSettings: {
                name: 'Atidaryti Pagrindinį Skydelį',
              },
            },
          },
        },
      },
      service: {
        title: 'Paslauga',
        options: {
          service: {
            name: 'Paslauga',
            options: {
              APIURL: {
                name: 'API adresas',
              },
            },
          },
        },
      },
      about: {
        title: 'Apie',
        options: {
          about: {
            name: 'Apie Programą',
            options: {
              application: {
                version: 'Versija: ',
              },
              openSource: {
                name: 'Atvirojo Kodo Nuoroda',
                button: 'Pranešti apie Problemą',
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
        name: 'Kitos parinktys',
      },
      read: {
        original: 'Skaityti Originalą',
        translation: 'Skaityti Vertimą',
      },
      copy: {
        tips: 'Kopijuoti į mainų sritį',
      },
    },
  },
}
