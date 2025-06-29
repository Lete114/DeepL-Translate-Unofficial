export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Odpri nastavitve',
      },
      version: {
        label: 'Različica',
      },
      restartApp: {
        label: 'Ponovno zaženi aplikacijo',
      },
      quit: {
        label: 'Izhod',
      },
    },
  },
  settings: {
    title: 'Nastavitve aplikacije',
    menu: {
      general: {
        title: 'Splošno',
        options: {
          application: {
            title: 'Nastavitve aplikacije',
            autoStart: {
              name: 'Samodejni zagon ob zagonu sistema',
            },
            closeSettings: {
              name: 'Zapri nastavitve',
              options: {
                minimize: 'Minimiziraj v sistemski pladenj',
                exit: 'Zapri aplikacijo',
              },
            },
          },
          appearance: {
            title: 'Nastavitve videza',
            language: {
              name: 'Jezik',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Sledi nastavitvam sistema',
                light: 'Svetli način',
                dark: 'Temni način',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Bližnjice',
        options: {
          shortcuts: {
            name: 'Bližnjice',
            placeholder: 'Pritisnite bližnjico na tipkovnici',
            options: {
              openTranslate: {
                name: 'Odpri okno za prevajanje',
              },
              openSettings: {
                name: 'Odpri glavno ploščo',
              },
            },
          },
        },
      },
      service: {
        title: 'Storitev',
        options: {
          service: {
            name: 'Storitev',
            options: {
              APIURL: {
                name: 'API naslov',
              },
            },
          },
        },
      },
      about: {
        title: 'O aplikaciji',
        options: {
          about: {
            name: 'O aplikaciji',
            options: {
              application: {
                version: 'Različica: ',
              },
              openSource: {
                name: 'Povezava do odprtokodnega projekta',
                button: 'Poročaj o težavi',
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
        name: 'Druge možnosti',
      },
      read: {
        original: 'Preberi izvirnik',
        translation: 'Preberi prevod',
      },
      copy: {
        tips: 'Kopiraj v odložišče',
      },
    },
  },
}
