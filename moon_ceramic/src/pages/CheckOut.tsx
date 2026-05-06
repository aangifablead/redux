import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
 // 1. Access both Auth and the multi-user Cart state
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const { cartsByUser } = useSelector((state: RootState) => state.cart);

  // 2. Safely derive items for the current user
  const userEmail = user?.email;
  const items = (isLoggedIn && userEmail) ? (cartsByUser[userEmail] || []) : [];
  
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 3. Prevent crash if accessed while logged out
  if (!isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center">
        <ShoppingBag className="mx-auto mb-6 text-stone-300" size={48} />
        <h2 className="text-2xl font-serif uppercase tracking-widest text-stone-800">Please Sign In</h2>
        <p className="mt-4 text-sm text-stone-500 mb-8">You must be logged in to complete a purchase.</p>
        <Link to="/login" className="bg-stone-800 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left: Shipping & Billing Form */}
      <div>
        <h2 className="text-xl font-serif uppercase tracking-widest mb-8">Shipping Address</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
            <input type="text" placeholder="Last Name" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
          </div>
          <input type="text" placeholder="Address" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="City" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
            <input type="text" placeholder="State" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
            <input type="text" placeholder="ZIP code" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
          </div>
          <input type="tel" placeholder="Phone" className="w-full border border-stone-200 p-3 text-xs focus:border-stone-800 outline-none" />
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className="bg-stone-50 p-8 h-fit">
        <h2 className="text-lg font-serif uppercase tracking-widest mb-6 border-b border-stone-200 pb-4">Your Order</h2>
        <div className="space-y-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={item.img} className="w-12 h-12 object-cover border border-stone-200" />
                  <span className="absolute -top-2 -right-2 bg-stone-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px]">{item.quantity}</span>
                </div>
                <span className="font-bold uppercase">{item.name}</span>
              </div>
              <span className="text-stone-600">₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t border-stone-200 pt-4 space-y-2">
          <div className="flex justify-between text-xs text-stone-500 uppercase">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold uppercase tracking-widest pt-4 text-stone-800">
            <span>Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full bg-stone-800 text-white py-4 mt-8 text-[10px] uppercase font-bold tracking-widest hover:bg-black transition cursor-pointer">
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;