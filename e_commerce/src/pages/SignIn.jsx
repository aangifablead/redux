import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice'; 
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ name })); 
        navigate('/'); 
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white border rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Sign In</h2>
                <p className="text-gray-500 mb-6">Enter your details to access your account.</p>
                
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Madelyn Torff"
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            required 
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" 
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg shadow-md transition-all active:scale-95">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-600">
                    <span>Don't have an account? </span>
                    <Link to="/signup" className="text-blue-600 font-bold hover:underline">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;