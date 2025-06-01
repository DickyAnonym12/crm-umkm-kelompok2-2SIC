import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User, ShoppingCart, FileText, LogOut } from 'lucide-react';

const UserLayout = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <ShoppingCart />, path: '/dashboard' },
    { name: 'Orders', icon: <FileText />, path: '/orders' },
    { name: 'Profile', icon: <User />, path: '/profile' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-xl font-bold text-purple-700">
                UMKM CRM
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-purple-700 border-b-2 border-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="w-5 h-5 mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t">
        <nav className="flex justify-around">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${
                isActive(item.path)
                  ? 'text-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span className="mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout; 