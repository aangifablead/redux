// src/components/Navbar.jsx
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// Ensure this name matches the export in Step 1
import { logoutUser } from '../store/authSlice'; 

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // Call the correct function name
    navigate('/signin');
  };

  return (
    <nav className="p-4 border-b flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">SHOP</Link>
      <div className="flex gap-4 items-center">
        {isAuthenticated ? (
          <>
            <span>Hi, {user?.name}</span>
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar