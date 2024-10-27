import React from 'react';
import logo from '../assets/react.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { Link } from 'react-router-dom'; 

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.theme === 'dark'); 

  const handleToggle = () => {
    dispatch(toggleTheme()); 
  };

  return (
    <div
      className={`flex justify-around items-center p-4 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="flex items-center">
        <a href="#" className="mr-4">
          <img src={logo} alt="logo" className="h-8" />
        </a>
        <a href="#" className="text-lg font-semibold hover:text-blue-500">
          Brave
        </a>
      </div>
      <div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-500">
            {t('header.templates')}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t('header.features')}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t('header.pricing')}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t('header.resources')}
          </a>
          <Link to="/cart" className="hover:text-blue-500">CART</Link> 
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <button onClick={handleToggle} className="px-2 py-1 border rounded-md">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Header;
