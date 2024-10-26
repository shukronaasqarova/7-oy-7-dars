import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import languageReducer from './languageSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    language: languageReducer,
    theme: themeReducer,
  },
});

export default store;
