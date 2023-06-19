import React, { useContext } from 'react';
import '../App.css';
import LanguageContext from '../context/LanguageContext';

const Navbar = () => {
  const { language, handleChangeLA } = useContext(LanguageContext);
  const { text } = language;

  return (
    <div className="navbar">
      <p className="font-mono text-base">{text?.home}</p>
      <p className="font-mono text-base">
        {text?.current}: {language.id}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleChangeLA}
      >
        {text && text.button}
      </button>
    </div>
  );
};

export default Navbar;
