import  i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import polish from './polish.json';

const resources = {
  en: {
    translation: english
  },
  pl: {
    translation: polish
  }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng: "en"
});

export default i18next;