import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '../locales';

i18next.use(initReactI18next).init({
  lng: 'ptBR',
  fallbackLng: 'ptBR',
  resources,
  parseMissingKeyHandler: () => '',
  interpolation: {
    escapeValue: false,
  },
});
