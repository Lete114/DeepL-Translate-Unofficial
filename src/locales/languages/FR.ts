export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Ouvrir les paramètres',
      },
      version: {
        label: 'Version',
      },
      restartApp: {
        label: 'Redémarrer l’application',
      },
      quit: {
        label: 'Quitter',
      },
    },
  },
  settings: {
    title: 'Paramètres de l’application',
    menu: {
      general: {
        title: 'Général',
        options: {
          application: {
            title: 'Paramètres de l’application',
            autoStart: {
              name: 'Démarrage automatique au lancement',
            },
            closeSettings: {
              name: 'Fermer les paramètres',
              options: {
                minimize: 'Réduire dans la barre système',
                exit: 'Quitter l’application',
              },
            },
          },
          appearance: {
            title: 'Paramètres d’apparence',
            language: {
              name: 'Langue',
            },
            theme: {
              name: 'Thème',
              options: {
                system: 'Suivre le système',
                light: 'Mode clair',
                dark: 'Mode sombre',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Raccourcis',
        options: {
          shortcuts: {
            name: 'Raccourcis',
            placeholder: 'Veuillez appuyer sur un raccourci clavier',
            options: {
              openTranslate: {
                name: 'Ouvrir la fenêtre de traduction',
              },
              openSettings: {
                name: 'Ouvrir le panneau principal',
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
                name: 'URL de l\'API',
              },
            },
          },
        },
      },
      about: {
        title: 'À propos',
        options: {
          about: {
            name: 'À propos de l’application',
            options: {
              application: {
                version: 'Version : ',
              },
              openSource: {
                name: 'Lien open source',
                button: 'Signaler un problème',
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
        name: 'Autres options',
      },
      read: {
        original: 'Lire l’original',
        translation: 'Lire la traduction',
      },
      copy: {
        tips: 'Copié dans le presse-papiers',
      },
    },
  },
}
