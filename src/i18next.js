import i18n from 'i18next'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

// const languages = ['en', 'pl']
i18n
    // .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    'name': 'Marharyta Pryshchapionak',
                    'to': 'current',
                    'onlineCourse': 'Online-course',
                    'PSU': 'Polotsk State University',
                    'copyright': ' All Rights Reserved.',
                    'Phone': '+48 796-027-535',
                    'Email': 'margokomilfo.dev@gmail.com',
                    'aboutMe': {
                        'title': 'ABOUT ME',
                        'common': {
                            '1': 'Front-end (react) developer – that is what I have been going with confident small steps the past 2 years. Daily work on yourself, pumping my skills, learning English and reading technical literature helps me get closer to my goal every day. Easy? No. Nevertheless, I am ready for difficulties. Ready to learn and develop. Now I am writing with some projects to demonstrate and consolidate my skills. Its underway - the functionality is expanding, errors are being fixed.',
                            '2': 'In Poland, I have a permanent place of residence with access to work like local residents. I am a hardworking and goal-oriented person with a great motivation to achieve high results and become a highly qualified professional.',
                            '3': 'My main goal at work is to do more than anyone expects from me and grow as a professional together with the company. I would like to join your team and I believe that together we will be able to make this world a better place',
                        },
                        'left': {
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
                        'experiences': {
                            'exp': 'experiences',
                            '1': {
                                'position': 'Front-end developer',
                                'companyName': 'freelance',
                                'description': 'React development using Redux, React/Redux, axios, MaterialUI libraries. Work with Hooks,' +
                                    ' TypeScript, creating Rest API. Refactoring, bug fixing, migrating to TypeScript, registration and' +
                                    ' login form creation, custom components development, jest testing, storybook. JavaScript,' +
                                    ' TypeScript, React/Redux,RestAPI. '
                            },
                            '2': {
                                'position': 'Front-end developer',
                                'companyName': 'IT-incubator (Belarus)',
                                'description': 'JavaScript, React/Redux, TypeScript, RestAPI. Writing web-projects, mentoring of students,' +
                                    ' solving problems with code and fixing of code-bugs.'
                            },
                            '3': {
                                'position': 'Director',
                                'companyName': 'Online-store "Krasotka-pro" (Belarus)',
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
                            },
                        },
                        'education': {
                            'edu': 'education',
                            'edu1': {
                                'faculty': 'Information technologies',
                                'specialization': 'Information Technologies Software',
                                'country': 'Belarus',
                            },
                            'edu2': {
                                'faculty': 'Law',
                                'specialization': 'Jurisprudence',
                            },
                        },
                        'courses': {
                            'cour': 'courses',
                            'course1': {
                                'position': 'React for middle',
                                'description': 'TypeScript, Ant Design, Appolo GraphQL, Socket.IO, RestAPI, MaterialUI, vanilla JS,' +
                                    ' Angular, node.js.'
                            },
                            'course2': {
                                'position': 'React/Redux',
                                'description': 'Props (attributes), functional Components, class Components, state, methods of' +
                                    ' lifecycle, create-react-app, bind, Babel, ECMAScript, presentational & containerComponents,' +
                                    ' redux-thunk, state vs Redux, HOC, React Hooks, useReducer, useMemo, useCallback, FLAX, npm/yarn.'
                            },
                            'course3': {
                                'position': 'Web-developer 2.0',
                                'description': 'HTML5, CSS3 (BEM, SASS, Bootstrap), JavaScript (HTML DOM), Git & GitHub, Libraries jQuery,' +
                                    ' React, Redux, Website testing, Animation.'
                            },
                            'course4': {
                                'position': 'Web-developer',
                                'description': 'HTML/CSS/Less/Saas, Bootstrap, Javascript, jQuery, WordPress, Responsive web design (RWD).'
                            },
                            'course5': {
                                'position': 'JavaScript + React',
                                'description': 'JavaScript in React, jsx, Flux, class Components, Object Life Cycles, connect, building' +
                                    ' forms in React - formik library.'
                            },
                            'course6': {
                                'position': 'HTML/CSS + JavaScript',
                                'description': 'HTML, css, basic jQuery, basic JavaScript'
                            },
                            'course7': {
                                'position': 'HTML, css, javascript',
                                'companyName': 'IT-Academy',
                                'description': 'HTML, css, basic JavaScript'
                            },
                            'course8': {
                                'position': 'Pedagogical course',
                                'description': 'What is education and what types of it we have today? Learn some key point about' +
                                    ' development of offline and online education, make a good pedagogical dispositive, how to start your' +
                                    ' teaching project, advice and tips for beginning teaching project and improving teaching skills'
                            },
                            'course9': {
                                'position': 'CorelDraw',
                                'description': 'Create business card and unique color palettes, design clean and professional business' +
                                    ' cards,organizing a brochure layout by learning. Learned how to manage pages, also combining' +
                                    ' vector shapes, to use them in logos and graphics'
                            },
                            'course10': {
                                'position': 'Photoshop',
                                'description': 'Business cards, design icons, illustrations and characters, improve and repair' +
                                    ' photos, remove people or objects from photos and cut away a person from their background, ' +
                                    'use creative effects to design stunning text styles, layers, master selections, working with the layers panel.'
                            },
                        },
                    },
                    'contactMe': {
                        'title': 'CONTACT ME',
                        'inTouch': 'LET\'S GET IN TOUCH',
                        'dropMe': 'DROP ME A LINE',
                        'yourName': 'Your name',
                        'placeholderName': 'name',
                        'yourEmail': 'Your email',
                        'yourMessage': 'Your message',
                        'placeholderMessage': 'Your message...',
                        'sendMessage': 'send message',
                        'alert': 'The message was sent. :)',
                        'thank': 'Thank you.',
                        'errorName1': 'Name is required',
                        'errorName2': 'Are you sure?',
                        'errorEmail1': 'Email is required',
                        'errorEmail2': 'Invalid email address',
                    },
                    'insertion': {
                        '1': 'I Love To Design & Develop',
                        '2': 'I\'m Open To Work',
                        'button': 'Hire me now',
                    },
                    'skills': {
                        'title': 'skills',
                    },
                    'menu': {
                        'home': 'Home',
                        'aboutMe': 'About me',
                        'resume': 'Resume',
                        'works': 'Works',
                        'skills': 'Skills',
                        'contact': 'Contact'
                    },
                }
            },
            pl: {
                translation: {
                    'name': 'Małgorzata Pryshchapionak',
                    'to': 'obecnie',
                    'onlineCourse': 'Online-kurs',
                    'PSU': 'Połotski Narodowy Uniwersytet',
                    'copyright': ' Wszelkie Prawa Zastrzeżone',
                    'Phone': '+48 796-027-535',
                    'Email': 'margokomilfo.dev@gmail.com',
                    'aboutMe': {
                        'title': 'Jestem',
                        'common': {
                            '1': 'Front-end (react) developer - to, do czego dążę pewnymi, małymi krokami w ciągu ostatnich 2 lat. Codzienna praca nad sobą, doskonalenie umiejętności, nauka angielskiego i czytanie literatury technicznej pomaga mi każdego dnia być bliżej celu.\n' +
                                'Łatwo? Nie. Ale jestem gotowa zdobywać dogłębną wiedzę i doświadczenie.',
                            '2': 'W Polsce mam stały pobyt z dostępem do pracy. Jestem osobą pracowitą i zorientowaną na cel, z ogromną motywacją do osiągania wysokich wyników i bycia wysoko wykwalifikowanym specjalistą.',
                            '3': 'Moim głównym celem w pracy jest rozwój jako profesjonalista razem z firmą, oraz zrobienie więcej, niż ktokolwiek ode mnie oczekuje. Chciałabym dołączyć do waszego zespołu, i wierzę, że razem będziemy mogli zrobić ten świat lepszym miejscem.',
                        },
                        'left': {
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
                        'experiences': {
                            'exp': 'doświadczenie',
                            '1': {
                                'position': 'Front-end developer',
                                'companyName': 'freelance',
                                'description': 'React development przy użyciu bibliotek Redux, React/Redux, axios, MaterialUI libraries. Praca z Hook\'ami,' +
                                    ' TypeScript, tworzenie Rest API. Refaktoryzacja, naprawianie błędów, migracja do TypeScript\'u. ' +
                                    ' Tworzenie formularzy logowania i rejestracji,  własnych komponentów. Jest testowanie, storybook. JavaScript' +
                                    ' TypeScript, React/Redux,RestAPI. '
                            },
                            '2': {
                                'position': 'Front-end developer',
                                'companyName': 'IT-incubator (Białoruś)',
                                'description': 'JavaScript, React/Redux, TypeScript, RestAPI. Tworzenie projektów internetowych, mentoring uczniów,' +
                                'rozwiązywanie i naprawianie błędów w kodzie.'
                            },
                            '3': {
                                'position': 'Dyrector',
                                'companyName': 'Online store \'Krasotka-pro\' (Białoruś)',
                                'description': 'Sprzedaż internetowa, marketing, wsparcie online, zarządzanie finansami, rozwiązywanie problemów'
                            },
                            '4': {
                                'position': 'Nauczyciel języków oprogramowania',
                                'companyName': 'Połotski Narodowy Uniwersytet (Białoruś)',
                                'description': 'Nauczanie kolejnych przedmiotów: Pascal, Delphi, HTML, CSS, JavaScript, program księgowy 1C.' +
                                   'Byłam głównym nauczycielem 30 projektów dyplomowych.'
                            },
                            '5': {
                                'position': 'Front-end developer',
                                'companyName': '\'Felix\' (Białoruś)',
                                'description': 'Tworzenie i projektowanie stron internetowych (Photoshop).'
                            },
                        },
                        'education': {
                            'edu': 'edukacja',
                            'edu1': {
                                'faculty': 'Technologie informacyjne',
                                'specialization': 'Oprogramowanie technologii informacyjnych',
                                'country': 'Białoruś',
                            },
                            'edu2': {
                                'faculty': 'Prawoznawstwo',
                                'specialization': 'Prawnik',
                            },
                        },
                        'courses': {
                            'cour': 'kursy',
                            'course1': {
                                'position': 'React for middle',
                                'to': 'obecnie',
                                'description': 'TypeScript, Ant Design, Appolo GraphQL, Socket.IO, RestAPI, MaterialUI, vanilla JS,' +
                                    ' Angular, node.js.'
                            },
                            'course2': {
                                'position': 'React/Redux',
                                'description': 'Props (attributes), functional Components, class Components, state, methods of' +
                                    ' lifecycle, create-react-app, bind, Babel, ECMAScript, presentational & containerComponents,' +
                                    ' redux-thunk, state vs Redux, HOC, React Hooks, useReducer, useMemo, useCallback, FLAX, npm/yarn.'
                            },
                            'course3': {
                                'position': 'Web-developer 2.0',
                                'description': 'HTML5, CSS3 (BEM, SASS, Bootstrap), JavaScript (HTML DOM), Git & GitHub, Libraries jQuery,' +
                                    ' React, Redux, Website testing, Animation.'
                            },
                            'course4': {
                                'position': 'Web-developer',
                                'description': 'HTML/CSS/Less/Saas, Bootstrap, Javascript, jQuery, WordPress, Responsive web design (RWD).'
                            },
                            'course5': {
                                'position': 'JavaScript + React',
                                'description': 'JavaScript in React, jsx, Flux, class Components, Object Life Cycles, connect, building' +
                                    ' forms in React - formik library.'
                            },
                            'course6': {
                                'position': 'HTML/CSS + JavaScript',
                                'description': 'HTML, css, basic jQuery, basic JavaScript'
                            },
                            'course7': {
                                'position': 'HTML, css, javascript',
                                'companyName': 'IT-Academy',
                                'description': 'HTML, css, basic JavaScript'
                            },
                            'course8': {
                                'position': 'Kurs pedagogiczny',
                                'description': 'Czym jest edukacja i jakie jej rodzaje mamy dzisiaj? Dowiedziłam się kluczowego punktu na temat rozwój edukacji offline i online,' +
                                    ' jak projekt nauczania, porady i wskazówki dotyczące rozpoczęcia nauczania projektu i doskonalenia umiejętności pedagogicznych.'
                            },
                            'course9': {
                                'position': 'CorelDraw',
                                'description': 'Stworzenie wizytówek i unikalnych palet kolorów, zaprojektowanie profesjonalnych wizytówek. ' +
                                    'Nauczyłem się jak zarządzać stronami, również łączyć kształty wektorowe, aby użyć ich w logo i grafice.'
                            },
                            'course10': {
                                'position': 'Photoshop',
                                'description': 'Wizytówki, design icons, ilustracje i postacie, ulepszenie i naprawienie' +
                                    ' zdjęć, usunięcie przedmiów ze zdjęć i odcięcie osob od tła, ' +
                                    ' Nauczyłem się jak używać efektów kreatywnych do projektowania oszałamiających stylów tekstu, ' +
                                    'warstw, zaznaczeń wzorcowych, pracy z panelem warstw'
                            },
                        },
                    },
                    'contactMe': {
                        'title': 'SKONTAKTUJ SIĘ ZE MNĄ',
                        'inTouch': 'Bądźmy w kontakcie',
                        'dropMe': 'Napisz mi',
                        'yourName': 'Jak masz na imię?',
                        'placeholderName': 'imię',
                        'yourEmail': 'Jaki jest twój email?',
                        'yourMessage': 'Napisz wiadomość',
                        'placeholderMessage': 'Twoja wiadomość...',
                        'sendMessage': 'wyślij wiadomość',
                        'alert': 'Wiadomość została wysłana. :)',
                        'thank': 'Dziękuję.',
                        'errorName1': 'Imię jest wymagane',
                        'errorName2': 'Jesteś pewny(a) ?',
                        'errorEmail1': 'Email jest wymagany',
                        'errorEmail2': 'Nieprawidłowy e-mail adres',
                    },
                    'insertion': {
                        '1': 'Lubię To, Co Robię',
                        '2': 'Jestem Otwarta Na Pracę.',
                        'button': 'Napisz do mnie',
                    },
                    'skills': {
                        'title': 'umiejętności',
                    },
                    'menu': {
                        'home': 'Home',
                        'aboutMe': 'O mnie',
                        'resume': 'Moje CV',
                        'works': 'Prace',
                        'skills': 'Umiejętności',
                        'contact': 'Contact'
                    },
                }
            }
        },
        // whiteList: languages,
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    })
export default i18n