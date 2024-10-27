import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LanguageSelector from './components/LanguageSelector';
import ThemeSelector from './components/ThemeSelector';
// import ProductPage from './components/ProductCard';

const App = () => {
  return (
    <div>
      <LanguageSelector />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
