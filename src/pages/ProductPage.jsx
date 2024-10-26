import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import Header from '../components/Header' 

const products = [
  { id: 1, name: 'Mahsulot 1' },
  { id: 2, name: 'Mahsulot 2' },
  { id: 3, name: 'Mahsulot 3' },
];

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Header /> 

      <main className="w-full max-w-2xl mt-4">
        <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>
        <ul className="space-y-4">
          {products.map(product => (
            <li key={product.id} className="flex justify-between items-center p-4 border rounded shadow bg-white hover:shadow-lg transition-shadow duration-300">
              <span>{product.name}</span>
              <button 
                onClick={() => handleAddToCart(product)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Savatga qo'shish
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setShowCart(!showCart)} 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
        >
          {showCart ? 'Savatni yashirish' : 'Savatni ko\'rsatish'}
        </button>

        {showCart && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">Savat:</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Savat bo'sh.</p>
            ) : (
              <ul className="space-y-2">
                {cartItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center p-2 border rounded shadow bg-white hover:shadow-lg transition-shadow duration-300">
                    <span>{item.name}</span>
                    <button 
                      onClick={() => handleRemoveFromCart(item)} 
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-300"
                    >
                      O'chirish
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
