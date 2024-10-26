import React, { useState } from 'react';
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice'; // to'g'ri yo'lni o'rnating

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [product, setProduct] = useState({ id: '', name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id && product.name && product.price) {
      dispatch(addToCart(product));
      setProduct({ id: '', name: '', price: '' });
    }
  };

  return (

    <div className="p-4">
            <Header/>
      <h2 className="text-2xl">Cart</h2>
      <form onSubmit={handleSubmit} className="border p-4 mb-4">
        <h2 className="text-lg font-bold">Add Product to Cart</h2>
        <div className="mb-2">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
            className="border p-1"
          />
        </div>
        <div className="mb-2">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="border p-1"
          />
        </div>
        <div className="mb-2">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="border p-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add to Cart
        </button>
      </form>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name} - {item.price} USD</span>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))} 
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
