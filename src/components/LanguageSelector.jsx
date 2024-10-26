// components/LanguageSelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/languageSlice';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    dispatch(setLanguage(selectedLang));
  };

  return (
    <select onChange={handleLanguageChange} className="border-b-2 border-gray-200 focus:border-blue-500">
      <option value="uz">O'zbek</option>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
