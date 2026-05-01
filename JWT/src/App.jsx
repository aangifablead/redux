import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import './App.css';
// Simple placeholder components for your protected pages
const Dashboard = () => <h2>User Dashboard (Protected)</h2>;
const AdminSettings = () => <h2>Admin Settings (Protected)</h2>;

function App() {
  return (
    <Routes>
      {/* All routes are wrapped in Layout to provide consistent structure */}
      <Route path="/" element={<Layout />}>
        
        {/* --- PUBLIC --- */}
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* --- PROTECTED (Users & Admins) --- */}
        <Route element={<RequireAuth allowedRoles={["User", "Admin"]} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* --- ADMIN ONLY --- */}
        <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* --- CATCH ALL --- */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;