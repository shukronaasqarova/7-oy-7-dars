import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // product mavjudligini tekshirish
  if (!product) {
    return <p>Mahsulot mavjud emas.</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded">Savatga qo'shish</button>
    </div>
  );
};

// Default props qo'shish
ProductCard.defaultProps = {
  product: { name: 'Noma', description: 'Tavsif mavjud emas.' },
};

export default ProductCard;
