import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Wireless Headphones", price: 120, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Minimalist Watch", price: 85, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
];

const ProductPage = () => (
  <div className="max-w-7xl mx-auto py-12 px-6">
    <h1 className="text-4xl font-bold mb-10 text-gray-900">Featured Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(p => (
        <div key={p.id} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl bg-gray-200">
            <img src={p.img} alt={p.name} className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition">
              Add to Cart
            </button>
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
              <Link to={`/product/${p.id}`} className="text-sm text-indigo-600 underline">View Details</Link>
            </div>
            <p className="text-xl font-light text-gray-900">${p.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductPage;