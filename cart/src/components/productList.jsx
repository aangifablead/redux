import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const products = [
  { id: 1, name: "Premium Headphones", price: 150 },
  { id: 2, name: "Mechanical Keyboard", price: 100 },
  { id: 3, name: "Gaming Mouse", price: 60 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;