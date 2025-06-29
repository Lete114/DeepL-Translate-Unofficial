export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Abrir Definições',
      },
      version: {
        label: 'Versão',
      },
      restartApp: {
        label: 'Reiniciar Aplicação',
      },
      quit: {
        label: 'Sair',
      },
    },
  },
  settings: {
    title: 'Definições da Aplicação',
    menu: {
      general: {
        title: 'Geral',
        options: {
          application: {
            title: 'Definições da Aplicação',
            autoStart: {
              name: 'Iniciar automaticamente ao arrancar',
            },
            closeSettings: {
              name: 'Fechar definições',
              options: {
                minimize: 'Minimizar para a área de notificação',
                exit: 'Sair da aplicação',
              },
            },
          },
          appearance: {
            title: 'Definições de Aparência',
            language: {
              name: 'Idioma',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Seguir definições do sistema',
                light: 'Modo Claro',
                dark: 'Modo Escuro',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Atalhos',
        options: {
          shortcuts: {
            name: 'Atalhos',
            placeholder: 'Pressione o atalho de teclado',
            options: {
              openTranslate: {
                name: 'Abrir a janela de tradução',
              },
              openSettings: {
                name: 'Abrir o painel principal',
              },
            },
          },
        },
      },
      service: {
        title: 'Serviço',
        options: {
          service: {
            name: 'Serviço',
            options: {
              APIURL: {
                name: 'URL da API',
              },
            },
          },
        },
      },
      about: {
        title: 'Sobre',
        options: {
          about: {
            name: 'Sobre a aplicação',
            options: {
              application: {
                version: 'Versão: ',
              },
              openSource: {
                name: 'Link para o código aberto',
                button: 'Reportar um problema',
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
        name: 'Outras opções',
      },
      read: {
        original: 'Ler original',
        translation: 'Ler tradução',
      },
      copy: {
        tips: 'Copiar para a área de transferência',
      },
    },
  },
}
