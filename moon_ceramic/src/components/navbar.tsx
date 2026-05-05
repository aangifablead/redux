import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store'; // Adjust path
import { logout } from '../features/authSlice';
import { ShoppingCart, Heart, User, LogOut, Menu, Search } from 'lucide-react';

const Navbar: React.FC = () => {
    const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-serif tracking-widest text-stone-800">MOON.</h1>

                {/* Links - Desktop */}
                <div className="hidden md:flex space-x-10 text-sm uppercase tracking-widest text-stone-600">
                    <a href="/" className="hover:text-stone-900 transition">Home</a>
                    <a href="/" className="hover:text-stone-900 transition">Shop</a>
                    <a href="/" className="hover:text-stone-900 transition">About</a>
                    <a href="/" className="hover:text-stone-900 transition">Contact</a>
                </div>

                {/* Icons & Auth */}
                <div className="flex items-center space-x-6">
                    <Search size={20} className="text-stone-600 cursor-pointer" />
                    <Heart size={20} className="text-stone-600 cursor-pointer" />
                    <div className="relative">
                        <ShoppingCart size={20} className="text-stone-600 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </div>

                    {isLoggedIn ? (
                        <div className="flex items-center space-x-4 border-l pl-6 border-stone-300">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-stone-800">{user?.name}</p>
                            </div>
                            <button onClick={() => dispatch(logout())} className="text-stone-500 hover:text-red-600 transition">
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <a href="/login" className="bg-stone-800 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition">
                            Sign In
                        </a>
                    )}
                    <Menu className="md:hidden text-stone-800" size={24} />
                </div>
            </div>
        </nav>
    );
};
export default Navbar