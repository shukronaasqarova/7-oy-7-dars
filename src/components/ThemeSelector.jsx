import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

function ThemeSelector() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle} className="px-2 py-1 border rounded-md">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeSelector;
