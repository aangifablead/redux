import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../features/authSlice';

const AuthPage = ({ type: initialType }: { type: 'login' | 'signup' }) => {
  // Use state to allow toggling between 'login' and 'signup'
  const [authMode, setAuthMode] = useState<'login' | 'signup'>(initialType);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const registeredUsers = useSelector((state: any) => state.auth.registeredUsers);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authMode === 'signup') {
      dispatch(signUp(formData));
      alert('Account created!');
      setAuthMode('login');
    } else {
      // 1. Check if user exists in the list before trying to login
      const userExists = registeredUsers.some((u: any) => u.email === formData.email);
      if (!userExists) {
        if (confirm("No account found. Would you like to create one?")) {
          setAuthMode('signup');
        }
      } else {
        dispatch(login({ email: formData.email, password: formData.password }));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F8F6] px-6">
      <div className="w-full max-w-md bg-white p-10 shadow-sm border border-stone-100">
        <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center">
          {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {authMode === 'signup' && (
            <input
              type="text" placeholder="Name" required
              className="w-full border-b border-stone-300 py-2 outline-none focus:border-stone-800"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          )}
          <input
            type="email" placeholder="Email" required
            className="w-full border-b border-stone-300 py-2 outline-none focus:border-stone-800"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password" placeholder="Password" required
            className="w-full border-b border-stone-300 py-2 outline-none focus:border-stone-800"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button className="w-full bg-stone-800 text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-stone-700 transition">
            {authMode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle link at the bottom */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="text-xs text-stone-500 uppercase tracking-widest hover:text-stone-800 transition underline underline-offset-4"
          >
            {authMode === 'login'
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;