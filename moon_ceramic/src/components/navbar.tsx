import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store'; 
import { logout } from '../features/authSlice';
import { LogOut, Menu, ShoppingBagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    
    // Access auth state
    const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
    
    // Access the new multi-user cart state
    const { cartsByUser } = useSelector((state: RootState) => state.cart);
    
    // Calculate quantity ONLY for the currently logged-in user
    const userEmail = user?.email;
    const userItems = (isLoggedIn && userEmail) ? (cartsByUser[userEmail] || []) : [];
    
    const totalQuantity = userItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/">
                    <h1 className="text-2xl font-serif tracking-widest text-stone-800 cursor-pointer">MOON.</h1>
                </Link>

                <div className="hidden md:flex space-x-10 text-sm uppercase tracking-widest text-stone-600">
                    <Link to="/" className="hover:text-stone-900 transition">Home</Link>
                    <Link to="/shop" className="hover:text-stone-900 transition">Shop</Link>
                    <Link to="/about" className="hover:text-stone-900 transition">About</Link>
                    <Link to="/contact" className="hover:text-stone-900 transition">Contact</Link>
                </div>

                <div className="flex items-center space-x-6">                
                    <div className="relative">
                        <Link to="/cart" className="relative block">
                            <ShoppingBagIcon className="w-6 h-6 text-stone-800" />
                            {/* Quantity badge is now user-specific */}
                            {totalQuantity > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>
                    </div>

                    {isLoggedIn ? (
                        <div className="flex items-center space-x-4 border-l pl-6 border-stone-300">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-stone-800">{user?.name}</p>
                            </div>
                            <button 
                                onClick={() => dispatch(logout())} 
                                className="text-stone-500 hover:text-red-600 transition cursor-pointer"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="bg-stone-800 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition">
                            Sign In
                        </Link>
                    )}
                    <Menu className="md:hidden text-stone-800 cursor-pointer" size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;