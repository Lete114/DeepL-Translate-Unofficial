export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Abe seade',
      },
      version: {
        label: 'Verzió',
      },
      restartApp: {
        label: 'Taaskäivita rakendus',
      },
      quit: {
        label: 'Välju',
      },
    },
  },
  settings: {
    title: 'Alkalmazás beállításai',
    menu: {
      general: {
        title: 'Általános',
        options: {
          application: {
            title: 'Alkalmazás beállításai',
            autoStart: {
              name: 'Automatikus indítás bekapcsoláskor',
            },
            closeSettings: {
              name: 'Beállítások bezárása',
              options: {
                minimize: 'Minimalizálás a tálcára',
                exit: 'Alkalmazás bezárása',
              },
            },
          },
          appearance: {
            title: 'Megjelenés beállításai',
            language: {
              name: 'Nyelv',
            },
            theme: {
              name: 'Téma',
              options: {
                system: 'Rendszer beállításainak követése',
                light: 'Világos mód',
                dark: 'Sötét mód',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Billentyűparancsok',
        options: {
          shortcuts: {
            name: 'Billentyűparancsok',
            placeholder: 'Nyomj meg egy billentyűkombinációt',
            options: {
              openTranslate: {
                name: 'Fordítási ablak megnyitása',
              },
              openSettings: {
                name: 'Főpanel megnyitása',
              },
            },
          },
        },
      },
      service: {
        title: 'Szolgáltatás',
        options: {
          service: {
            name: 'Szolgáltatás',
            options: {
              APIURL: {
                name: 'API URL',
              },
            },
          },
        },
      },
      about: {
        title: 'Névjegy',
        options: {
          about: {
            name: 'Az alkalmazásról',
            options: {
              application: {
                version: 'Verzió: ',
              },
              openSource: {
                name: 'Nyílt forráskódú hivatkozás',
                button: 'Hiba bejelentése',
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
        name: 'Egyéb lehetőségek',
      },
      read: {
        original: 'Eredeti olvasása',
        translation: 'Fordítás olvasása',
      },
      copy: {
        tips: 'Másolva a vágólapra',
      },
    },
  },
}
