import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext'; // Import the hook

function ProtectedRoute() {
  const { user, logout } = useAuth(); // Get user and logout function from context

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={logout} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProtectedRoute;