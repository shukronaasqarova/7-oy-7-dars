import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === '') return; 
    setItems([...items, itemName]); 
    setItemName('');
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index); 
    setItems(newItems);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">CART</h1>
      
      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border border-gray-300 p-4 rounded-l-md shadow-md w-2/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          placeholder="Mahsulot nomini kiriting"
        />
        <button type="submit" className="bg-blue-600 text-white p-4 rounded-r-md shadow-md hover:bg-blue-700 transition duration-300">
          ADD
        </button>
      </form>

      <p className="text-xl font-semibold mb-4 text-center">
        Cartda {items.length} ta mahsulot mavjud.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-3 mb-2 rounded-md shadow-md hover:shadow-lg transition duration-300">
              <span className="text-gray-800 font-medium">{item}</span>
              <button onClick={() => handleRemove(index)} className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300">
                <REMOVE></REMOVE>
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">Cart bo'sh.</li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
