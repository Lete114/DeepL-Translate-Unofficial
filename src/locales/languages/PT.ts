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
    title: 'Configurações do Aplicativo',
    menu: {
      general: {
        title: 'Geral',
        options: {
          application: {
            title: 'Configurações do Aplicativo',
            autoStart: {
              name: 'Iniciar automaticamente ao iniciar',
            },
            closeSettings: {
              name: 'Fechar configurações',
              options: {
                minimize: 'Minimizar para a bandeja do sistema',
                exit: 'Sair do aplicativo',
              },
            },
          },
          appearance: {
            title: 'Configurações de aparência',
            language: {
              name: 'Idioma',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Seguir configurações do sistema',
                light: 'Modo claro',
                dark: 'Modo escuro',
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
            placeholder: 'Pressione a tecla de atalho',
            options: {
              openTranslate: {
                name: 'Abrir janela de tradução',
              },
              openSettings: {
                name: 'Abrir painel principal',
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
            name: 'Sobre o aplicativo',
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
