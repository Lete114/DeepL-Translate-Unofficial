export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Open instellingen',
      },
      version: {
        label: 'Versie',
      },
      restartApp: {
        label: 'Herstart applicatie',
      },
      quit: {
        label: 'Afsluiten',
      },
    },
  },
  settings: {
    title: 'Toepassingsinstellingen',
    menu: {
      general: {
        title: 'Algemeen',
        options: {
          application: {
            title: 'Toepassingsinstellingen',
            autoStart: {
              name: 'Automatisch opstarten bij opstarten',
            },
            closeSettings: {
              name: 'Sluit instellingen',
              options: {
                minimize: 'Minimaliseer naar systeemvak',
                exit: 'Toepassing afsluiten',
              },
            },
          },
          appearance: {
            title: 'Weergave-instellingen',
            language: {
              name: 'Taal',
            },
            theme: {
              name: 'Thema',
              options: {
                system: 'Volg systeeminstellingen',
                light: 'Lichtmodus',
                dark: 'Donkere modus',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Sneltoetsen',
        options: {
          shortcuts: {
            name: 'Sneltoetsen',
            placeholder: 'Druk op een sneltoets',
            options: {
              openTranslate: {
                name: 'Vertaalvenster openen',
              },
              openSettings: {
                name: 'Hoofdmenu openen',
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
                name: 'API-adres',
              },
            },
          },
        },
      },
      about: {
        title: 'Over',
        options: {
          about: {
            name: 'Over de applicatie',
            options: {
              application: {
                version: 'Versie: ',
              },
              openSource: {
                name: 'Open source link',
                button: 'Probleem melden',
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
        name: 'Andere opties',
      },
      read: {
        original: 'Lees origineel',
        translation: 'Lees vertaling',
      },
      copy: {
        tips: 'Kopieer naar klembord',
      },
    },
  },
}
