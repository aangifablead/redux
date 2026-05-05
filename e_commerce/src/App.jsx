import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route 
              path="/product/:id" 
              element={<div className="p-10 text-center text-2xl font-bold">Product Detail Page Coming Soon</div>} 
            />
            
            <Route 
              path="/cart" 
              element={<div className="p-10 text-center">Your Shopping Cart</div>} 
            />
            <Route 
              path="/wishlist" 
              element={<div className="p-10 text-center">Your Wishlist</div>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;