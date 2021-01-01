import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languages= ['en', 'ru', 'pl']
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    'name': 'Marharyta Pryshchapionak',
                    'aboutMe': {
                        'title': 'ABOUT ME',
                        'common': {
                            '1': 'Front-end (react) developer – that is what I have been going with confident small steps the past 2 years. Daily work on yourself, pumping my skills, learning English and reading technical literature helps me get closer to my goal every day. Easy? No. Nevertheless, I am ready for difficulties. Ready to learn and develop. Now I am writing with some projects to demonstrate and consolidate my skills. Its underway - the functionality is expanding, errors are being fixed.',
                            '2': 'In Poland, I have a permanent place of residence with access to work like local residents. I am a hardworking and goal-oriented person with a great motivation to achieve high results and become a highly qualified professional.',
                            '3': 'My main goal at work is to do more than anyone expects from me and grow as a professional together with the company. I would like to join your team and I believe that together we will be able to make this world a better place',
                        },
                        'left': {
                            'Phone': '+48 796-027-535',
                            'Email': 'margokomilfo-dev@gmail.com',
                            'Address': 'Wroclaw, Poland',
                            'buttonName': 'DOWNLOAD RESUME',
                        },
                        'right': {
                            '0': 'HOBBIES & INTERESTS',
                            '1': 'Sport',
                            '2': 'Books',
                            '3': 'Family',
                            '4': 'codewars',
                            '5': 'Animals',
                            '6': 'Travels',
                            '7': 'Mac OS',
                            '8': 'Money',
                            '9': 'Cinema',
                            '10': 'stackoverflow',
                            '11': 'habr',
                            '12': 'Coffee',
                        },
                    },
                    'myResume': {
                        'title': 'MY RESUME',
                        'experiences': 'experiences',
                        '1': {
                            'position': 'Front-end developer',
                            'companyName': 'freelance',
                            'to': 'Current',
                            'description': 'React development using Redux, React/Redux, axios, MaterialUI libraries. Work with Hooks,' +
                                ' TypeScript, creating Rest API. Refactoring, bug fixing, migrating to TypeScript, registration and' +
                                ' login form creation, custom components development, jest testing, storybook. JavaScript,' +
                                ' TypeScript, React/Redux,RestAPI. '
                        },
                        '2': {
                            'position': 'Front-end developer',
                            'companyName': 'IT-incubator (Belarus)',
                            'to': 'Current',
                            'description': 'JavaScript, React/Redux, TypeScript, RestAPI. Writing web-projects, mentoring of students,' +
                                ' solving problems with code and fixing of code-bugs.'
                        },
                        '3': {
                            'position': 'Director',
                            'companyName': 'Online store "Krasotka-pro" (Belarus)',
                            'description': 'internet sales, marketing, online support, financial management, problem solving '
                        },
                        '4': {
                            'position': 'Teacher of programing languages',
                            'companyName': 'Polotsk State University (Belarus)',
                            'description': 'Teaching next subjects: Pascal, Delphi, HTML, CSS, JavaScript, accounting program 1C. I' +
                                ' was the main teacher of 30 testimony projects.'
                        },
                        '5': {
                            'position': 'Front-end developer',
                            'companyName': 'Felix (Belarus)',
                            'description': 'Creating of web-sites & web-design (Photoshop).'
                        }
                    }
                }
            },
            ru: {
                translation: {
                    'name': 'Маргарита Прищепёнок',
                    'aboutMe': {
                        'title': 'Обо мне',
                        'common': {
                            '1': 'Ответственный и мотивированный Front-End разработчик с опытом создания целевых страниц, SPA с использованием HTML, CSS, JS, React, Redux, самодисциплиной и навыками работы в команде. Я быстро нахожу общий язык с людьми. Учусь легко и с удовольствием.',
                            '2': '',
                            '3': '',
                        },
                        'left': {
                            'Phone': '+48 796-027-535',
                            'Email': 'margokomilfo-dev@gmail.com',
                            'Address': 'Вроцлав, Польша',
                            'buttonName': 'Скачать резюме',
                        },
                        'right': {
                            '0': 'Хобби и интересы',
                            '1': 'Спорт',
                            '2': 'Книги',
                            '3': 'Семья',
                            '4': 'codewars',
                            '5': 'животные',
                            '6': 'путешествия',
                            '7': 'Mac OS',
                            '8': 'деньги',
                            '9': 'кино',
                            '10': 'stackoverflow',
                            '11': 'habr',
                            '12': 'кофе',
                        },
                    },
                    'myResume': {
                        'title': 'Мое резюме',
                        'experiences': 'опыт',
                        '1': {
                            'position': 'Front-end разработчик',
                            'companyName': 'freelance',
                            'to': 'сейчас',
                            'description': 'React разработка с использованием Redux, React/Redux, axios, MaterialUI libraries. Работа с Hooks,' +
                                ' TypeScript, Rest API. Рефакторинг, фикс багов, миграция react-приложения на  TypeScript, создание форм логинизации и регистрации,' +
                                ' разработка небольших фич, тестирование jest, storybook. JavaScript,' +
                                ' TypeScript, React/Redux,RestAPI. '
                        },
                        '2': {
                            'position': 'Front-end разработчик',
                            'companyName': 'IT-incubator (Беларусь)',
                            'to': 'сейчас',
                            'description': 'JavaScript, React/Redux, TypeScript, RestAPI. Написание веб-проектов, менторинг студентов,' +
                                'фикс багов, создание unit-тестов, верстка.'
                        },
                        '3': {
                            'position': 'Director',
                            'companyName': 'Online магазин "Krasotka-pro" (Беларусь)',
                            'description': 'Интернет продажи, маркетинг, online поддержка, финансовый меноджмент, решение проблеи и нахождение компромиссов. '
                        },
                        '4': {
                            'position': 'Преподаватель языков программирования',
                            'companyName': 'Полоцкий Государственный Университет (Беларусь)',
                            'description': 'Преподавала следующие предметы: Pascal, Delphi, HTML, CSS, JavaScript, 1C. Была ведущим преподавателем 30 дипломных проектов.'
                        },
                        '5': {
                            'position': 'Front-end разработчик',
                            'companyName': 'Felix (Беларусь)',
                            'description': 'Создание web-страниц и веб-дизайна (Photoshop).'
                        }
                    }
                }
            },
            pl: {
                translation: {
                    'name': 'Marharyta Pryshchapionak',
                    'aboutMe': {
                        'title': 'Jestem',
                        'common': {
                            '1': 'Front-end (react) developer - to do czego ja dążę pewnymi małymi krokami w ciągu ostatnich 14 miesięcy. Codzienna praca nad sobą, doskonalenie umiejętności, nauka angielskiego i czytanie literatury technicznej pomaga mi każdego dnia być bliżej celu.\n' +
                                'Łatwo? Nie. Ale jestem gotowa zdobywać dogłębną wiedzę i doświadczenie.',
                            '2': 'W Polsce mam stały pobyt z dostępem do pracy. Jestem osobą pracowitą i zorientowaną na cel z ogromną motywacją do osiągania wysokich wyników i zostania wysoko wykwalifikowanym specjalistą.',
                            '3': 'Moim głównym celem w pracy jest zrobić więcej, niż ktokolwiek ode mnie oczekuje i rozwijać się jako profesjonalista razem z firmą. Chciałbym dołączyć do waszego zespołu i wierzę, że razem będziemy mogli stworzyć ten świat najlepszym miejscem.',
                        },
                        'left': {
                            'Phone': '+48 796-027-535',
                            'Email': 'margokomilfo-dev@gmail.com',
                            'Address': 'Wrocław, Poland',
                            'buttonName': 'pobierz CV',
                        },
                        'right': {
                            '0': 'HOBBY & ZAINTERESOWANIA',
                            '1': 'Sport',
                            '2': 'Książki',
                            '3': 'Rodzina',
                            '4': 'codewars',
                            '5': 'Zwierzęta',
                            '6': 'Podróże',
                            '7': 'Mac OS',
                            '8': 'Pieniądze',
                            '9': 'Kino',
                            '10': 'stackoverflow',
                            '11': 'habr',
                            '12': 'Kawa',
                        },
                    },
                    'myResume': {
                        'title': 'MOJE CV',
                        'experiences': 'doświadczenie',
                        '1': {
                            'position': 'Front-end developer',
                            'companyName': 'freelance',
                            'to': 'obecnie',
                            'description': 'React development using Redux, React/Redux, axios, MaterialUI libraries. Work with Hooks,' +
                                ' TypeScript, creating Rest API. Refactoring, bug fixing, migrating to TypeScript, registration and' +
                                ' login form creation, custom components development, jest testing, storybook. JavaScript,' +
                                ' TypeScript, React/Redux,RestAPI. '
                        },
                        '2': {
                            'position': 'Front-end developer',
                            'companyName': 'IT-incubator (Białoruś)',
                            'to': 'obecnie',
                            'description': 'JavaScript, React/Redux, TypeScript, RestAPI. Writing web-projects, mentoring of students,' +
                                ' solving problems with code and fixing of code-bugs.'
                        },
                        '3': {
                            'position': 'Director',
                            'companyName': 'Online store "Krasotka-pro" (Białoruś)',
                            'description': 'internet sales, marketing, online support, financial management, problem solving '
                        },
                        '4': {
                            'position': 'Nauczyciel języków programowania',
                            'companyName': 'Polotski Narodowy Uniwersytet (Białoruś)',
                            'description': 'Teaching next subjects: Pascal, Delphi, HTML, CSS, JavaScript, accounting program 1C. I' +
                                ' was the main teacher of 30 testimony projects.'
                        },
                        '5': {
                            'position': 'Front-end developer',
                            'companyName': '\'Felix\' (Białoruś)',
                            'description': 'Creating of web-sites & web-design (Photoshop).'
                        }
                    }
                }
            },
            whiteList: languages,
            lng: 'en',
            fallbackLng: 'en',
            debug: true,
            interpolation: {
                escapeValue: false
            }
        }
    })
export default i18n