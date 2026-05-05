import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { RootState } from './app/store';

// Import Components
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
// import AuthPage from './pages/AuthPage';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-[#F9F8F6] text-stone-800 font-sans selection:bg-stone-200">
        <Navbar />

        <Routes>
          {/* Home / Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes: Redirect to home if already logged in */}
          {/* <Route
            path="/login"
            element={!isLoggedIn ? <AuthPage type="login" /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isLoggedIn ? <AuthPage type="signup" /> : <Navigate to="/" />}
          /> */}

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 

        {/* Optional Footer */}
        <footer className="py-12 border-t border-stone-200 text-center text-xs text-stone-400 uppercase tracking-widest">
          © 2026 Moon Ceramic Studio. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App
