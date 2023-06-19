import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Body = () => {
  const { language } = useContext(LanguageContext);
  const text = language.text;

  return (
    <div className="body_container">
      <h1>{text?.title}</h1>
      <p>{text && text.description}</p>
    </div>
  );
};

export default Body;
