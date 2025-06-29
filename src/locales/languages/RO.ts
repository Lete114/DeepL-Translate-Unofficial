export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Deschide setările',
      },
      version: {
        label: 'Versiune',
      },
      restartApp: {
        label: 'Repornește aplicația',
      },
      quit: {
        label: 'Ieși',
      },
    },
  },
  settings: {
    title: 'Setări aplicație',
    menu: {
      general: {
        title: 'General',
        options: {
          application: {
            title: 'Setări aplicație',
            autoStart: {
              name: 'Pornire automată la pornirea sistemului',
            },
            closeSettings: {
              name: 'Închide setările',
              options: {
                minimize: 'Minimizează în tavă',
                exit: 'Ieși din aplicație',
              },
            },
          },
          appearance: {
            title: 'Setări de aparență',
            language: {
              name: 'Limbă',
            },
            theme: {
              name: 'Temă',
              options: {
                system: 'Urmărește setările sistemului',
                light: 'Mod luminos',
                dark: 'Mod întunecat',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Scurtături',
        options: {
          shortcuts: {
            name: 'Scurtături',
            placeholder: 'Apasă o scurtătură de la tastatură',
            options: {
              openTranslate: {
                name: 'Deschide fereastra de traducere',
              },
              openSettings: {
                name: 'Deschide panoul principal',
              },
            },
          },
        },
      },
      service: {
        title: 'Serviciu',
        options: {
          service: {
            name: 'Serviciu',
            options: {
              APIURL: {
                name: 'URL API',
              },
            },
          },
        },
      },
      about: {
        title: 'Despre',
        options: {
          about: {
            name: 'Despre aplicație',
            options: {
              application: {
                version: 'Versiune: ',
              },
              openSource: {
                name: 'Link către codul sursă deschis',
                button: 'Raportează o problemă',
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
        name: 'Alte opțiuni',
      },
      read: {
        original: 'Citește originalul',
        translation: 'Citește traducerea',
      },
      copy: {
        tips: 'Copiază în clipboard',
      },
    },
  },
}
