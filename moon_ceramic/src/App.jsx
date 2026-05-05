import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import ProductDetail from './components/ProductDetail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/CheckOut';

function App() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F8F6] text-stone-800 font-sans selection:bg-stone-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/login"
            element={!isLoggedIn ? <AuthPage type="login" /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isLoggedIn ? <AuthPage type="signup" /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <footer className="py-12 border-t border-stone-200 text-center text-xs text-stone-400 uppercase tracking-widest">
          © 2026 Moon Ceramic Studio. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App
