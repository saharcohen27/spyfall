// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  he: {
    translation: {
      "How Would You Like to Play?": "איך תרצו לשחק?",
      "Single Device":"מכשיר יחיד",
      "Create Room":"צור חדר",
      "The Agent": "הסוכן",
      "Game Settings": "הגדרות משחק",
      "Total players": "כמות שחקנים",
      "Total agents": "כמות סוכנים",
      "Start Game": "התחל משחק"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
