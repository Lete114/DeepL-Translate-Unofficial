export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Buka Pengaturan',
      },
      version: {
        label: 'Versi',
      },
      restartApp: {
        label: 'Mulai Ulang Aplikasi',
      },
      quit: {
        label: 'Keluar',
      },
    },
  },
  settings: {
    title: 'Pengaturan Aplikasi',
    menu: {
      general: {
        title: 'Umum',
        options: {
          application: {
            title: 'Pengaturan Aplikasi',
            autoStart: {
              name: 'Luncurkan Otomatis Saat Startup',
            },
            closeSettings: {
              name: 'Tutup Pengaturan',
              options: {
                minimize: 'Minimalkan ke Tray',
                exit: 'Keluar dari Aplikasi',
              },
            },
          },
          appearance: {
            title: 'Pengaturan Tampilan',
            language: {
              name: 'Bahasa',
            },
            theme: {
              name: 'Tema',
              options: {
                system: 'Ikuti Sistem',
                light: 'Mode Terang',
                dark: 'Mode Gelap',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Pintasan',
        options: {
          shortcuts: {
            name: 'Pintasan',
            placeholder: 'Tekan pintasan keyboard',
            options: {
              openTranslate: {
                name: 'Buka Jendela Terjemahan',
              },
              openSettings: {
                name: 'Buka Panel Utama',
              },
            },
          },
        },
      },
      service: {
        title: 'Layanan',
        options: {
          service: {
            name: 'Layanan',
            options: {
              APIURL: {
                name: 'URL API',
              },
            },
          },
        },
      },
      about: {
        title: 'Tentang',
        options: {
          about: {
            name: 'Tentang Aplikasi',
            options: {
              application: {
                version: 'Versi: ',
              },
              openSource: {
                name: 'Tautan Sumber Terbuka',
                button: 'Laporkan Masalah',
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
        name: 'Opsi Lainnya',
      },
      read: {
        original: 'Baca Asli',
        translation: 'Baca Terjemahan',
      },
      copy: {
        tips: 'Disalin ke Clipboard',
      },
    },
  },
}
