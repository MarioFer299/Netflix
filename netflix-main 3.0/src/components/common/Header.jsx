import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Home, Film, Tv, TrendingUp, List } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = ({ transparent = false }) => {
  const { user, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = transparent && scrollY < 50;

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'series', label: 'Series', icon: Tv },
    { id: 'movies', label: 'Películas', icon: Film },
    { id: 'trending', label: 'Populares', icon: TrendingUp },
    { id: 'mylist', label: 'Mi lista', icon: List }
  ];

  const handleOutsideClick = (e) => {
    if (showUserMenu && !e.target.closest('.user-menu')) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showUserMenu]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent ? 'bg-gradient-to-b from-black to-transparent' : 'bg-black'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center space-x-8">
          <h1 
            className="text-red-600 text-2xl md:text-3xl font-bold cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            NETFLIX
          </h1>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-white hover:text-gray-300 transition-colors flex items-center gap-2 ${
                  currentPage === item.id ? 'text-red-500' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="relative user-menu">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <img 
                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"} 
                alt="Avatar"
                className="w-8 h-8 rounded bg-red-600"
              />
              <span className="hidden md:block">{user?.name}</span>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 bg-black bg-opacity-95 rounded border border-gray-700 py-2 w-48 backdrop-blur-sm">
                <div className="px-4 py-2 text-white border-b border-gray-700">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  Mi perfil
                </button>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  Configuración
                </button>
                <hr className="border-gray-700 my-1" />
                <button 
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {searchOpen && (
        <div className="px-4 md:px-12 pb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Títulos, personas, géneros"
              className="w-full pl-12 pr-4 py-2 bg-black border border-gray-600 text-white rounded focus:outline-none focus:border-white"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;