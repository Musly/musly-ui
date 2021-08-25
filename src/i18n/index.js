import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';

// Setting up i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false,
    },
  });
