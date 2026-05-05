// src/components/ProductSection.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  desc: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <section className="py-15 max-w-7xl mx-auto px-6">
      <h2 className="text-center text-xl font-serif uppercase tracking-[0.3em] text-stone-800 mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col text-left">
            <div className="aspect-3/4 bg-stone-100 mb-4 overflow-hidden">
               <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <h4 className="text-[10px] uppercase tracking-wider font-bold text-stone-800">
              {product.name}
            </h4>
            <p className="text-xs text-stone-500 font-bold mt-1">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-[10px] text-stone-400 mt-2 leading-relaxed">
              {product.desc}
            </p>
            <button className="mt-6 border border-stone-800 py-2 text-[9px] uppercase tracking-widest font-bold hover:bg-stone-800 hover:text-white transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;