import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/admin/MainLayout';
import UserLayout from './components/layouts/UserLayout';
import Dashboard from './pages/admin/Dashboard';
import UserDashboard from './pages/user/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import './App.css';

// Protected Route component
const ProtectedRoute = ({ children, isAdmin = false }) => {
  // Get user info from localStorage
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
  {/* Auth Routes */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Admin Route */}
  <Route
    path="/admin"
    element={
      <ProtectedRoute isAdmin={true}>
        <MainLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Dashboard />} />
  </Route>

  {/* User Routes */}
  <Route
    path="/*"
    element={
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    }
  >
    <Route path="dashboard" element={<UserDashboard />} />
    <Route index element={<Navigate to="/dashboard" replace />} />
  </Route>
</Routes>
  );
};

export default App;
