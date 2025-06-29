export default {
  tray: {
    menu: {
      openSettings: {
        label: '설정 열기',
      },
      version: {
        label: '버전',
      },
      restartApp: {
        label: '앱 재시작',
      },
      quit: {
        label: '종료',
      },
    },
  },
  settings: {
    title: '애플리케이션 설정',
    menu: {
      general: {
        title: '일반',
        options: {
          application: {
            title: '애플리케이션 설정',
            autoStart: {
              name: '시작 시 자동 실행',
            },
            closeSettings: {
              name: '설정 닫기',
              options: {
                minimize: '트레이로 최소화',
                exit: '애플리케이션 종료',
              },
            },
          },
          appearance: {
            title: '디자인 설정',
            language: {
              name: '언어',
            },
            theme: {
              name: '테마',
              options: {
                system: '시스템 설정 따르기',
                light: '라이트 모드',
                dark: '다크 모드',
              },
            },
          },
        },
      },
      shortcuts: {
        title: '단축키',
        options: {
          shortcuts: {
            name: '단축키',
            placeholder: '키보드 단축키를 누르세요',
            options: {
              openTranslate: {
                name: '번역 창 열기',
              },
              openSettings: {
                name: '메인 패널 열기',
              },
            },
          },
        },
      },
      service: {
        title: '서비스',
        options: {
          service: {
            name: '서비스',
            options: {
              APIURL: {
                name: 'API URL',
              },
            },
          },
        },
      },
      about: {
        title: '정보',
        options: {
          about: {
            name: '앱 정보',
            options: {
              application: {
                version: '버전: ',
              },
              openSource: {
                name: '오픈소스 링크',
                button: '문제 보고',
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
        name: '기타 옵션',
      },
      read: {
        original: '원본 읽기',
        translation: '번역 읽기',
      },
      copy: {
        tips: '클립보드에 복사',
      },
    },
  },
}
