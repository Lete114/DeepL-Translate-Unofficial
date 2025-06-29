export default {
  tray: {
    menu: {
      openSettings: {
        label: 'Άνοιγμα Ρυθμίσεων',
      },
      version: {
        label: 'Έκδοση',
      },
      restartApp: {
        label: 'Επανεκκίνηση Εφαρμογής',
      },
      quit: {
        label: 'Έξοδος',
      },
    },
  },
  settings: {
    title: 'Ρυθμίσεις Εφαρμογής',
    menu: {
      general: {
        title: 'Γενικά',
        options: {
          application: {
            title: 'Ρυθμίσεις Εφαρμογής',
            autoStart: {
              name: 'Αυτόματη Εκκίνηση κατά την Εκκίνηση',
            },
            closeSettings: {
              name: 'Κλείσιμο Ρυθμίσεων',
              options: {
                minimize: 'Ελαχιστοποίηση στη Συρτάρι',
                exit: 'Έξοδος από την Εφαρμογή',
              },
            },
          },
          appearance: {
            title: 'Ρυθμίσεις Εμφάνισης',
            language: {
              name: 'Γλώσσα',
            },
            theme: {
              name: 'Θέμα',
              options: {
                system: 'Ακολουθήστε το Σύστημα',
                light: 'Φωτεινός Τρόπος',
                dark: 'Σκοτεινός Τρόπος',
              },
            },
          },
        },
      },
      shortcuts: {
        title: 'Συντομεύσεις',
        options: {
          shortcuts: {
            name: 'Συντομεύσεις',
            placeholder: 'Πατήστε τη συντόμευση πληκτρολογίου',
            options: {
              openTranslate: {
                name: 'Άνοιγμα Παραθύρου Μετάφρασης',
              },
              openSettings: {
                name: 'Άνοιγμα Κύριου Πίνακα',
              },
            },
          },
        },
      },
      service: {
        title: 'Υπηρεσία',
        options: {
          service: {
            name: 'Υπηρεσία',
            options: {
              APIURL: {
                name: 'Διεύθυνση API',
              },
            },
          },
        },
      },
      about: {
        title: 'Σχετικά',
        options: {
          about: {
            name: 'Σχετικά με την Εφαρμογή',
            options: {
              application: {
                version: 'Έκδοση: ',
              },
              openSource: {
                name: 'Σύνδεσμος Ανοιχτού Κώδικα',
                button: 'Αναφορά Προβλήματος',
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
        name: 'Άλλες επιλογές',
      },
      read: {
        original: 'Διαβάστε το Πρωτότυπο',
        translation: 'Διαβάστε τη Μετάφραση',
      },
      copy: {
        tips: 'Αντιγραφή στο Πρόχειρο',
      },
    },
  },
}
