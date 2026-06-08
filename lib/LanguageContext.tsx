import React, { createContext, useContext } from 'react';
import { Lang, translations, Translations } from './i18n';

const LanguageContext = createContext<Translations>(translations.pt);

export const LanguageProvider: React.FC<{ lang: Lang; children: React.ReactNode }> = ({ lang, children }) => (
  <LanguageContext.Provider value={translations[lang]}>
    {children}
  </LanguageContext.Provider>
);

export const useT = () => useContext(LanguageContext);
