import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import en from './en';
import vi from './vi';
console.log("vi", vi)

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        // defaultNS: 'translation',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    'title': '1',
                },
            },
            vi: {
                translation: {
                    'title': '2',
                },
            },
        },
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    }
    );


export default i18n;


