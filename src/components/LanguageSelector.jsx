import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/languageSlice'; 

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        dispatch(setLanguage(selectedLanguage)); 
    };

    return (
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
        </select>
    );
};

export default LanguageSelector;
