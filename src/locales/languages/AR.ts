export default {
  tray: {
    menu: {
      openSettings: {
        label: 'فتح الإعدادات',
      },
      version: {
        label: 'الإصدار',
      },
      restartApp: {
        label: 'إعادة تشغيل التطبيق',
      },
      quit: {
        label: 'خروج',
      },
    },
  },
  settings: {
    title: 'إعدادات التطبيق',
    menu: {
      general: {
        title: 'عام',
        options: {
          application: {
            title: 'إعدادات التطبيق',
            autoStart: {
              name: 'التشغيل التلقائي عند بدء التشغيل',
            },
            closeSettings: {
              name: 'إغلاق الإعدادات',
              options: {
                minimize: 'تصغير إلى علبة النظام',
                exit: 'الخروج من التطبيق',
              },
            },
          },
          appearance: {
            title: 'إعدادات المظهر',
            language: {
              name: 'اللغة',
            },
            theme: {
              name: 'الموضوع',
              options: {
                system: 'اتبع النظام',
                light: 'الوضع الفاتح',
                dark: 'الوضع الداكن',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'اختصارات',
        options: {
          shortcuts: {
            name: 'اختصارات',
            placeholder: 'الرجاء الضغط على اختصار لوحة المفاتيح',
            options: {
              openTranslate: {
                name: 'فتح نافذة الترجمة',
              },
              openSettings: {
                name: 'فتح اللوحة الرئيسية',
              },
            },
          },
        },
      },
      service: {
        title: 'الخدمة',
        options: {
          service: {
            name: 'الخدمة',
            options: {
              APIURL: {
                name: 'رابط واجهة برمجة التطبيقات',
              },
            },
          },
        },
      },
      about: {
        title: 'حول',
        options: {
          about: {
            name: 'حول التطبيق',
            options: {
              application: {
                version: 'الإصدار: ',
              },
              openSource: {
                name: 'رابط المصدر المفتوح',
                button: 'الإبلاغ عن مشكلة',
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
        name: 'خيارات أخرى',
      },
      read: {
        original: 'قراءة الأصل',
        translation: 'قراءة الترجمة',
      },
      copy: {
        tips: 'نسخ إلى الحافظة',
      },
    },
  },
}
