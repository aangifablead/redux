import React from 'react';
import { useParams } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';
import { addToCart } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));

  // Get current user from auth state
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!product) {
    return <div className="pt-40 text-center font-serif">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (isLoggedIn && user?.email) {
      // Pass both the item and the user identifier to the updated slice
      dispatch(addToCart({ item: product, userId: user.email }));
    } else {
      alert("Please login to add items to your cart");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1 bg-stone-50">
        <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-serif uppercase tracking-widest">{product.name}</h1>
        <p className="text-xl text-stone-800 font-serif">₹{product.price.toFixed(2)}</p>
        <p className="text-sm text-stone-500 leading-loose">{product.desc}</p>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-[#2D3139] text-white py-4 text-[10px] uppercase font-bold tracking-[0.2em] mt-8 cursor-pointer hover:bg-stone-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;