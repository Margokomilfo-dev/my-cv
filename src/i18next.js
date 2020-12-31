import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const languages = ['en', 'ru', 'pl']
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "name": "Marharyta Pryshchapionak"
                }
            },
            ru: {
                translation: {
                    "name": "Маргарита Прищепёнок"
                }
            },
            pl: {
                translation: {
                    "name": "Marharyta Pryshchapionak"
                }
            },
        },


        fallbackLng: 'en',
        debug: true,
        whitelist: languages,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    })
export default i18n