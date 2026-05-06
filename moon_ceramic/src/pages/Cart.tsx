import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeItem, incrementQuantity, decrementQuantity } from '../features/cartSlice'; // Recommended to add this!
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-40 text-center">
                <h2 className="text-2xl font-serif uppercase tracking-widest text-stone-400">Your cart is empty</h2>
                <a href="/shop" className="mt-8 inline-block text-[10px] uppercase tracking-[0.2em] font-bold border-b border-stone-800 pb-1">
                    Continue Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-serif mb-12 uppercase tracking-widest text-stone-800">
                Shopping Cart <span className="text-sm font-sans text-stone-400 ml-2">({items.length} items)</span>
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="border-b border-stone-200 text-stone-400 text-[10px] uppercase tracking-widest">
                        <tr>
                            <th className="pb-6 text-left font-medium">Product</th>
                            <th className="pb-6 text-left font-medium">Price</th>
                            <th className="pb-6 text-left font-medium">Quantity</th>
                            <th className="pb-6 text-right font-medium">Subtotal</th>
                            <th className="pb-6 text-right font-medium"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {items.map(item => (
                            <tr key={item.id} className="group">
                                <td className="py-8 flex items-center gap-6">
                                    <div className="w-24 h-24 bg-stone-50 overflow-hidden">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-800">{item.name}</span>
                                </td>
                                <td className="py-8 text-xs text-stone-600">₹{item.price.toFixed(2)}</td>
                                <td className="py-8 text-xs text-stone-600">
                                    <div className="flex items-center border border-stone-200 w-fit">
                                        <button
                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                            className="px-3 py-1 hover:bg-stone-50 cursor-pointer transition-colors"
                                        >
                                            -
                                        </button>

                                        <span className="px-3 py-1 border-x border-stone-200 min-w-[40px] text-center">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => dispatch(incrementQuantity(item.id))}
                                            className="px-3 py-1 hover:bg-stone-50 cursor-pointer transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="py-8 text-xs font-bold text-stone-800 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                                <td className="py-8 text-right">
                                    <button
                                        onClick={() => dispatch(removeItem(item.id))}
                                        className="text-stone-300 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cart Summary Section */}
            <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex-1 max-w-md w-full">
                    <p className="text-[10px] uppercase font-bold tracking-widest mb-4">Order Note</p>
                    <textarea className="w-full border border-stone-200 bg-transparent p-4 text-xs h-32 focus:outline-none focus:border-stone-800" placeholder="Special instructions for your order..."></textarea>
                </div>

                <div className="w-full md:w-96 bg-stone-50 p-10">
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-stone-500 text-[10px] uppercase tracking-widest">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-stone-500 text-[10px] uppercase tracking-widest">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="h-px bg-stone-200 my-4"></div>
                        <div className="flex justify-between text-stone-800 font-bold uppercase tracking-[0.2em]">
                            <span>Total</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-[#2D3139] text-white py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black transition-all cursor-pointer"
                    >
                        Proceed to Checkout
                    </button>

                    <p className="text-[9px] text-center text-stone-400 mt-6 uppercase leading-relaxed">
                        Tax included and shipping calculated at checkout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;