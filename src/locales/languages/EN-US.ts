export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Open Settings',
      },
      version: {
        label: 'Version',
      },
      restartApp: {
        label: 'Restart App',
      },
      quit: {
        label: 'Quit',
      },
    },
  },
  settings: {
    title: 'Application Settings',
    menu: {
      general: {
        title: 'General',
        options: {
          application: {
            title: 'Application Settings',
            autoStart: {
              name: 'Auto Launch on Startup',
            },
            closeSettings: {
              name: 'Close Settings',
              options: {
                minimize: 'Minimize to Tray',
                exit: 'Exit Application',
              },
            },
          },
          appearance: {
            title: 'Appearance Settings',
            language: {
              name: 'Language',
            },
            theme: {
              name: 'Theme',
              options: {
                system: 'Follow System',
                light: 'Light Mode',
                dark: 'Dark Mode',
              },
            },
          },
        },
      },
      service: {
        title: 'Service',
        options: {
          service: {
            name: 'Service',
            options: {
              APIURL: {
                name: 'API URL',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Shortcuts',
        options: {
          shortcuts: {
            name: 'Shortcuts',
            placeholder: 'Please press keyboard shortcut',
            options: {
              openTranslate: {
                name: 'Open Translation Window',
              },
              openSettings: {
                name: 'Open Main Panel',
              },
            },
          },
        },
      },
      about: {
        title: 'About',
        options: {
          about: {
            name: 'About the App',
            options: {
              application: {
                version: 'Version: ',
              },
              openSource: {
                name: 'Open Source Link',
                button: 'Report an Issue',
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
        name: 'Other Options',
      },
      read: {
        original: 'Read Original',
        translation: 'Read Translation',
      },
      copy: {
        tips: 'Copy to Clipboard',
      },
    },
  },
}
