import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Savat</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Savat bo'sh.</p>
      ) : (
        <ul className="bg-white border border-gray-300 rounded-md shadow-md p-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
              <span className="text-lg font-medium">{item.name}</span>
              <button 
                onClick={() => handleRemoveFromCart(item)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={handleClearCart} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Barcha narsalarni o'chirish
      </button>
    </div>
  );
};

export default CartPage;
