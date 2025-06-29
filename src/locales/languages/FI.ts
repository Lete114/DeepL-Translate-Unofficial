export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Avaa asetukset',
      },
      version: {
        label: 'Versio',
      },
      restartApp: {
        label: 'Käynnistä sovellus uudelleen',
      },
      quit: {
        label: 'Poistu',
      },
    },
  },
  settings: {
    title: 'Sovelluksen asetukset',
    menu: {
      general: {
        title: 'Yleiset',
        options: {
          application: {
            title: 'Sovelluksen asetukset',
            autoStart: {
              name: 'Käynnistä automaattisesti käynnistyksessä',
            },
            closeSettings: {
              name: 'Sulje asetukset',
              options: {
                minimize: 'Minimoi järjestelmävalikkoon',
                exit: 'Lopeta sovellus',
              },
            },
          },
          appearance: {
            title: 'Ulkoasun asetukset',
            language: {
              name: 'Kieli',
            },
            theme: {
              name: 'Teema',
              options: {
                system: 'Seuraa järjestelmän asetuksia',
                light: 'Vaalea tila',
                dark: 'Tumma tila',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Pikanäppäimet',
        options: {
          shortcuts: {
            name: 'Pikanäppäimet',
            placeholder: 'Paina pikanäppäintä',
            options: {
              openTranslate: {
                name: 'Avaa käännösikkuna',
              },
              openSettings: {
                name: 'Avaa pääpaneeli',
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
        title: 'Tietoa',
        options: {
          about: {
            name: 'Tietoa sovelluksesta',
            options: {
              application: {
                version: 'Versio: ',
              },
              openSource: {
                name: 'Avoimen lähdekoodin linkki',
                button: 'Ilmoita ongelmasta',
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
        name: 'Muut vaihtoehdot',
      },
      read: {
        original: 'Lue alkuperäinen',
        translation: 'Lue käännös',
      },
      copy: {
        tips: 'Kopioitu leikepöydälle',
      },
    },
  },
}
