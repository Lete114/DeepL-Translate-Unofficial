export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Apri Impostazioni',
      },
      version: {
        label: 'Versione',
      },
      restartApp: {
        label: 'Riavvia App',
      },
      quit: {
        label: 'Esci',
      },
    },
  },
  settings: {
    title: 'Impostazioni dell\'Applicazione',
    menu: {
      general: {
        title: 'Generale',
        options: {
          application: {
            title: 'Impostazioni dell\'Applicazione',
            autoStart: {
              name: 'Avvio Automatico all\'Accensione',
            },
            closeSettings: {
              name: 'Chiudi Impostazioni',
              options: {
                minimize: 'Riduci a Icona nel Vassoio',
                exit: 'Esci dall\'Applicazione',
              },
            },
          },
          appearance: {
            title: 'Impostazioni Aspetto',
            language: {
              name: 'Lingua',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Segui il Sistema',
                light: 'Modalità Chiara',
                dark: 'Modalità Scura',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Scorciatoie',
        options: {
          shortcuts: {
            name: 'Scorciatoie',
            placeholder: 'Premi una combinazione di tasti',
            options: {
              openTranslate: {
                name: 'Apri Finestra Traduzione',
              },
              openSettings: {
                name: 'Apri Pannello Principale',
              },
            },
          },
        },
      },
      service: {
        title: 'Servizio',
        options: {
          service: {
            name: 'Servizio',
            options: {
              APIURL: {
                name: 'URL API',
              },
            },
          },
        },
      },
      about: {
        title: 'Informazioni',
        options: {
          about: {
            name: 'Informazioni sull\'App',
            options: {
              application: {
                version: 'Versione: ',
              },
              openSource: {
                name: 'Link Open Source',
                button: 'Segnala un Problema',
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
        name: 'Altre opzioni',
      },
      read: {
        original: 'Leggi Originale',
        translation: 'Leggi Traduzione',
      },
      copy: {
        tips: 'Copiato negli Appunti',
      },
    },
  },
}
