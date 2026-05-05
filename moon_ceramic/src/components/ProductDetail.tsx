import React from 'react';
import { useParams } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch =useDispatch()
  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));
  if (!product) {
    return <div className="pt-40 text-center font-serif">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1 bg-stone-50">
        <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-serif uppercase tracking-widest">{product.name}</h1>
        <p className="text-xl text-stone-800 font-serif">₹{product.price.toFixed(2)}</p>
        <p className="text-sm text-stone-500 leading-loose">{product.desc}</p>
        
        <button onClick={() => dispatch(addToCart(product))}
         className="w-full bg-[#2D3139] text-white py-4 text-[10px] uppercase font-bold tracking-[0.2em] mt-8 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;