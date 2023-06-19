import { createContext, useState } from 'react';
import EN from '../languages/english.json';
import PTBR from '../languages/portuguese.json';
import ES from '../languages/spanish.json';

export const languages = {
  english: {
    id: 'English',
    text: EN,
  },
  portuguese: {
    id: 'Portuguese',
    text: PTBR,
  },
  spanish: {
    id: 'Spanish',
    text: ES,
  },
};

const LanguageContext = createContext(languages.english);

export default LanguageContext;
