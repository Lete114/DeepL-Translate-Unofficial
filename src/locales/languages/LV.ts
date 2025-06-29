export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Atvērt iestatījumus',
      },
      version: {
        label: 'Versija',
      },
      restartApp: {
        label: 'Restartēt lietojumprogrammu',
      },
      quit: {
        label: 'Iziet',
      },
    },
  },
  settings: {
    title: 'Lietojumprogrammas Iestatījumi',
    menu: {
      general: {
        title: 'Vispārīgi',
        options: {
          application: {
            title: 'Lietojumprogrammas Iestatījumi',
            autoStart: {
              name: 'Automātiska Palaišana Palaistot',
            },
            closeSettings: {
              name: 'Aizvērt Iestatījumus',
              options: {
                minimize: 'Minimizēt uz Sistēmas Lodziņu',
                exit: 'Iziet no Lietojumprogrammas',
              },
            },
          },
          appearance: {
            title: 'Izskata Iestatījumi',
            language: {
              name: 'Valoda',
            },
            theme: {
              name: 'Tēma',
              options: {
                system: 'Sekot Sistēmas Iestatījumiem',
                light: 'Gaišais Režīms',
                dark: 'Tumšais Režīms',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Īsinājumtaustiņi',
        options: {
          shortcuts: {
            name: 'Īsinājumtaustiņi',
            placeholder: 'Nospiediet taustiņu kombināciju',
            options: {
              openTranslate: {
                name: 'Atvērt Tulkošanas Logu',
              },
              openSettings: {
                name: 'Atvērt Galveno Paneli',
              },
            },
          },
        },
      },
      service: {
        title: 'Pakalpojums',
        options: {
          service: {
            name: 'Pakalpojums',
            options: {
              APIURL: {
                name: 'API adrese',
              },
            },
          },
        },
      },
      about: {
        title: 'Par',
        options: {
          about: {
            name: 'Par Lietojumprogrammu',
            options: {
              application: {
                version: 'Versija: ',
              },
              openSource: {
                name: 'Atvērtā Koda Saite',
                button: 'Ziņot par Problēmu',
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
        name: 'Citas opcijas',
      },
      read: {
        original: 'Lasīt oriģinālu',
        translation: 'Lasīt tulkojumu',
      },
      copy: {
        tips: 'Kopēt uz starpliktuvi',
      },
    },
  },
}
