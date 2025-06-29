export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Einstellungen öffnen',
      },
      version: {
        label: 'Version',
      },
      restartApp: {
        label: 'App neu starten',
      },
      quit: {
        label: 'Beenden',
      },
    },
  },
  settings: {
    title: 'App-Einstellungen',
    menu: {
      general: {
        title: 'Allgemein',
        options: {
          application: {
            title: 'App-Einstellungen',
            autoStart: {
              name: 'Automatischer Start bei Systemstart',
            },
            closeSettings: {
              name: 'Einstellungen schließen',
              options: {
                minimize: 'In die Taskleiste minimieren',
                exit: 'App beenden',
              },
            },
          },
          appearance: {
            title: 'Darstellungseinstellungen',
            language: {
              name: 'Sprache',
            },
            theme: {
              name: 'Thema',
              options: {
                system: 'Systemstandard folgen',
                light: 'Heller Modus',
                dark: 'Dunkler Modus',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Tastenkürzel',
        options: {
          shortcuts: {
            name: 'Tastenkürzel',
            placeholder: 'Bitte drücken Sie das Tastenkürzel',
            options: {
              openTranslate: {
                name: 'Übersetzungsfenster öffnen',
              },
              openSettings: {
                name: 'Hauptpanel öffnen',
              },
            },
          },
        },
      },
      service: {
        title: 'Dienst',
        options: {
          service: {
            name: 'Dienst',
            options: {
              APIURL: {
                name: 'API-Adresse',
              },
            },
          },
        },
      },
      about: {
        title: 'Über',
        options: {
          about: {
            name: 'Über die App',
            options: {
              application: {
                version: 'Version: ',
              },
              openSource: {
                name: 'Open-Source-Link',
                button: 'Problem melden',
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
        name: 'Weitere Optionen',
      },
      read: {
        original: 'Original lesen',
        translation: 'Übersetzung lesen',
      },
      copy: {
        tips: 'In die Zwischenablage kopieren',
      },
    },
  },
}
