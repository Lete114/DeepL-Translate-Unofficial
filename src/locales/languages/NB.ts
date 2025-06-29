export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Åpne innstillinger',
      },
      version: {
        label: 'Versjon',
      },
      restartApp: {
        label: 'Start app på nytt',
      },
      quit: {
        label: 'Avslutt',
      },
    },
  },
  settings: {
    title: 'Applikasjonsinnstillinger',
    menu: {
      general: {
        title: 'Generelt',
        options: {
          application: {
            title: 'Applikasjonsinnstillinger',
            autoStart: {
              name: 'Automatisk start ved oppstart',
            },
            closeSettings: {
              name: 'Lukk innstillinger',
              options: {
                minimize: 'Minimer til systemstatusfelt',
                exit: 'Lukk applikasjon',
              },
            },
          },
          appearance: {
            title: 'Utseendeinnstillinger',
            language: {
              name: 'Språk',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Følg systeminnstillingene',
                light: 'Lys modus',
                dark: 'Mørk modus',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Snarveier',
        options: {
          shortcuts: {
            name: 'Snarveier',
            placeholder: 'Trykk på tastatursnarvei',
            options: {
              openTranslate: {
                name: 'Åpne oversettelsesvindu',
              },
              openSettings: {
                name: 'Åpne hovedpanel',
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
            name: 'Om applikasjonen',
            options: {
              application: {
                version: 'Versjon: ',
              },
              openSource: {
                name: 'Åpen kildekode-lenke',
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
        name: 'Andre alternativer',
      },
      read: {
        original: 'Les original',
        translation: 'Les oversettelse',
      },
      copy: {
        tips: 'Kopier til utklippstavlen',
      },
    },
  },
}
