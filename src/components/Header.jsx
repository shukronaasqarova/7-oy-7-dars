// components/Header.js
import React from 'react';
import logo from '../assets/react.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-around items-center p-4">
      <div className="flex items-center">
        <a href="#" className="mr-4">
          <img src={logo} alt="logo" className="h-8" />
        </a>
        <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-500">Brave</a>
      </div>
      <div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">{t('header.templates')}</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">{t('header.features')}</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">{t('header.pricing')}</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">{t('header.resources')}</a>
        </nav>
      </div>
      <LanguageSelector />
    </div>
  );
}

export default Header;
