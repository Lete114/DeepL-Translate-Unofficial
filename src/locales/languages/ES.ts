export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Abrir Configuración',
      },
      version: {
        label: 'Versión',
      },
      restartApp: {
        label: 'Reiniciar Aplicación',
      },
      quit: {
        label: 'Salir',
      },
    },
  },
  settings: {
    title: 'Configuración de la aplicación',
    menu: {
      general: {
        title: 'General',
        options: {
          application: {
            title: 'Configuración de la aplicación',
            autoStart: {
              name: 'Iniciar automáticamente al arrancar',
            },
            closeSettings: {
              name: 'Cerrar configuración',
              options: {
                minimize: 'Minimizar en la bandeja del sistema',
                exit: 'Salir de la aplicación',
              },
            },
          },
          appearance: {
            title: 'Configuración de apariencia',
            language: {
              name: 'Idioma',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Seguir sistema',
                light: 'Modo claro',
                dark: 'Modo oscuro',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Atajos',
        options: {
          shortcuts: {
            name: 'Atajos',
            placeholder: 'Por favor presione el atajo de teclado',
            options: {
              openTranslate: {
                name: 'Abrir ventana de traducción',
              },
              openSettings: {
                name: 'Abrir panel principal',
              },
            },
          },
        },
      },
      service: {
        title: 'Servicio',
        options: {
          service: {
            name: 'Servicio',
            options: {
              APIURL: {
                name: 'URL de la API',
              },
            },
          },
        },
      },
      about: {
        title: 'Acerca de',
        options: {
          about: {
            name: 'Acerca de la aplicación',
            options: {
              application: {
                version: 'Versión: ',
              },
              openSource: {
                name: 'Enlace de código abierto',
                button: 'Informar de un problema',
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
        name: 'Otras opciones',
      },
      read: {
        original: 'Leer original',
        translation: 'Leer traducción',
      },
      copy: {
        tips: 'Copiado al portapapeles',
      },
    },
  },
}
