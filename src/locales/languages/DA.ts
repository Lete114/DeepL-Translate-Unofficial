export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Åbn indstillinger',
      },
      version: {
        label: 'Version',
      },
      restartApp: {
        label: 'Genstart app',
      },
      quit: {
        label: 'Afslut',
      },
    },
  },
  settings: {
    title: 'Applikationsindstillinger',
    menu: {
      general: {
        title: 'Generelt',
        options: {
          application: {
            title: 'Applikationsindstillinger',
            autoStart: {
              name: 'Auto-start ved opstart',
            },
            closeSettings: {
              name: 'Luk indstillinger',
              options: {
                minimize: 'Minimer til systembakken',
                exit: 'Afslut applikationen',
              },
            },
          },
          appearance: {
            title: 'Udseendeindstillinger',
            language: {
              name: 'Sprog',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Følg systemet',
                light: 'Lys tilstand',
                dark: 'Mørk tilstand',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Genveje',
        options: {
          shortcuts: {
            name: 'Genveje',
            placeholder: 'Tryk på genvejstast',
            options: {
              openTranslate: {
                name: 'Åbn oversættelsesvindue',
              },
              openSettings: {
                name: 'Åbn hovedpanel',
              },
            },
          },
        },
      },
      service: {
        title: 'Tjeneste',
        options: {
          service: {
            name: 'Tjeneste',
            options: {
              APIURL: {
                name: 'API-adresse',
              },
            },
          },
        },
      },
      about: {
        title: 'Om',
        options: {
          about: {
            name: 'Om applikationen',
            options: {
              application: {
                version: 'Version: ',
              },
              openSource: {
                name: 'Åben kildekode-link',
                button: 'Rapporter et problem',
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
        name: 'Andre muligheder',
      },
      read: {
        original: 'Læs originalen',
        translation: 'Læs oversættelsen',
      },
      copy: {
        tips: 'Kopier til udklipsholder',
      },
    },
  },
}
