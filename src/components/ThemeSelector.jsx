import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../redux/themeSlice';

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.value));
  };

  return (
    <select onChange={handleThemeChange}>
      <option value="light">Yorug'</option>
      <option value="dark">Qorong'u</option>
    </select>
  );
};

export default ThemeSelector;
