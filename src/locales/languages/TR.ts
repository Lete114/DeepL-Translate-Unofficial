export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Ayarları Aç',
      },
      version: {
        label: 'Sürüm',
      },
      restartApp: {
        label: 'Uygulamayı Yeniden Başlat',
      },
      quit: {
        label: 'Çık',
      },
    },
  },
  settings: {
    title: 'Uygulama Ayarları',
    menu: {
      general: {
        title: 'Genel',
        options: {
          application: {
            title: 'Uygulama Ayarları',
            autoStart: {
              name: 'Başlangıçta Otomatik Başlat',
            },
            closeSettings: {
              name: 'Ayarları Kapat',
              options: {
                minimize: 'Sistem Tepsisine Küçült',
                exit: 'Uygulamayı Kapat',
              },
            },
          },
          appearance: {
            title: 'Görünüm Ayarları',
            language: {
              name: 'Dil',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Sistem Ayarlarını Takip Et',
                light: 'Aydınlık Mod',
                dark: 'Karanlık Mod',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Kısayollar',
        options: {
          shortcuts: {
            name: 'Kısayollar',
            placeholder: 'Lütfen klavye kısayolunu tuşlayın',
            options: {
              openTranslate: {
                name: 'Çeviri Penceresini Aç',
              },
              openSettings: {
                name: 'Ana Paneli Aç',
              },
            },
          },
        },
      },
      service: {
        title: 'Hizmet',
        options: {
          service: {
            name: 'Hizmet',
            options: {
              APIURL: {
                name: 'API Adresi',
              },
            },
          },
        },
      },
      about: {
        title: 'Hakkında',
        options: {
          about: {
            name: 'Uygulama Hakkında',
            options: {
              application: {
                version: 'Sürüm: ',
              },
              openSource: {
                name: 'Açık Kaynak Bağlantısı',
                button: 'Hata Bildir',
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
        name: 'Diğer Seçenekler',
      },
      read: {
        original: 'Orijinali Oku',
        translation: 'Çeviriyi Oku',
      },
      copy: {
        tips: 'Panoya Kopyala',
      },
    },
  },
}
