import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/languages/languages.json', // JSON fayli "public/languages/languages.json" da joylashgan
    },
    fallbackLng: 'en', // Boshqa til topilmasa, ingliz tiliga qaytadi
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
