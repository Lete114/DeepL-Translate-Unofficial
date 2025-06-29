export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Öppna inställningar',
      },
      version: {
        label: 'Version',
      },
      restartApp: {
        label: 'Starta om appen',
      },
      quit: {
        label: 'Avsluta',
      },
    },
  },
  settings: {
    title: 'Appinställningar',
    menu: {
      general: {
        title: 'Allmänt',
        options: {
          application: {
            title: 'Appinställningar',
            autoStart: {
              name: 'Starta automatiskt vid systemstart',
            },
            closeSettings: {
              name: 'Stäng inställningar',
              options: {
                minimize: 'Minimera till systemfältet',
                exit: 'Stäng appen',
              },
            },
          },
          appearance: {
            title: 'Utseendeinställningar',
            language: {
              name: 'Språk',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Följ systeminställningar',
                light: 'Ljust läge',
                dark: 'Mörkt läge',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Genvägar',
        options: {
          shortcuts: {
            name: 'Genvägar',
            placeholder: 'Tryck på tangentbordsgenvägen',
            options: {
              openTranslate: {
                name: 'Öppna översättningsfönster',
              },
              openSettings: {
                name: 'Öppna huvudpanelen',
              },
            },
          },
        },
      },
      service: {
        title: 'Tjänst',
        options: {
          service: {
            name: 'Tjänst',
            options: {
              APIURL: {
                name: 'API-adress',
              },
            },
          },
        },
      },
      about: {
        title: 'Om',
        options: {
          about: {
            name: 'Om appen',
            options: {
              application: {
                version: 'Version: ',
              },
              openSource: {
                name: 'Länk till öppen källkod',
                button: 'Rapportera ett problem',
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
        name: 'Andra alternativ',
      },
      read: {
        original: 'Läs originalet',
        translation: 'Läs översättningen',
      },
      copy: {
        tips: 'Kopiera till urklipp',
      },
    },
  },
}
