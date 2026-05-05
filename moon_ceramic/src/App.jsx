import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from './components/LoadingScreen';

// Import Components
const Navbar=React.lazy(()=> import("../src/components/navbar"))
const LandingPage=React.lazy(()=> import("../src/pages/LandingPage"))
const AuthPage=React.lazy(()=> import("../src/pages/AuthPage"))
const ProductDetail=React.lazy(()=> import("../src/components/ProductDetail"))
const CartPage=React.lazy(()=> import("../src/pages/Cart"))
const CheckoutPage=React.lazy(()=> import("../src/pages/CheckOut"))

function App() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F8F6] text-stone-800 font-sans selection:bg-stone-200">
        <Navbar />

      <Suspense fallback={<LoadingScreen/>}>
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
    </Suspense>

        <footer className="py-12 border-t border-stone-200 text-center text-xs text-stone-400 uppercase tracking-widest">
          © 2026 Moon Ceramic Studio. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App
