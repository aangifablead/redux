import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(dispatch,'dispatchdispatch')
    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(loginUser({ name: formData.name, email: formData.email }));
        navigate('/');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white border rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Account</h2>
                <p className="text-gray-500 mb-6">Join us to start shopping and save your favorites.</p>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Madelyn Torff"
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg shadow-md transition-all active:scale-95">
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-600">
                    <span>Already have an account? </span>
                    <Link to="/signin" className="text-blue-600 font-bold hover:underline">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;