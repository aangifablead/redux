import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="group">
      {/* Image Container */}
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        className="bg-white aspect-[4/5] overflow-hidden cursor-pointer mb-6 relative"
      >
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-8" 
        />
      </div>

      {/* Info */}
      <div className="space-y-1 mb-6">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-800 leading-tight">
          {product.name}
        </h3>
        <p className="text-[11px] font-serif text-stone-800">
          ₹{product.price.toFixed(2)}
        </p>
        <p className="text-[10px] text-stone-400 leading-relaxed line-clamp-2">
          {product.desc}
        </p>
      </div>

      {/* Action */}
      <button 
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-full border border-stone-800 py-3 text-[9px] uppercase font-bold tracking-[0.2em] hover:bg-stone-800 hover:text-white transition-all cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;