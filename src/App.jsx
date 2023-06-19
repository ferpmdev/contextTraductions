import { useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import LanguageContext, { languages } from './context/LanguageContext';

function App() {
  LanguageContext;

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    if (language === languages.english) setLanguage(languages.portuguese);
    if (language === languages.portuguese) setLanguage(languages.spanish);
    if (language === languages.spanish) setLanguage(languages.english);
  };

  const providerValue = useMemo(
    () => ({ language, handleChangeLA }),
    [language, handleChangeLA]
  );

  return (
    <div className="App">
      <LanguageContext.Provider value={providerValue}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
