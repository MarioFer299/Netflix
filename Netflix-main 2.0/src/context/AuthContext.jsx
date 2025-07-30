import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Provider del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    // Simular llamada a API (reemplazar con tu API real)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          setUser(userData);
          setIsLoading(false);
          resolve({ success: true, user: userData });
        } else {
          setIsLoading(false);
          resolve({ success: false, error: 'Credenciales inválidas' });
        }
      }, 1000);
    });
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = {
            id: Date.now(),
            name: name,
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          setUser(userData);
          setIsLoading(false);
          resolve({ success: true, user: userData });
        } else {
          setIsLoading(false);
          resolve({ success: false, error: 'Todos los campos son requeridos' });
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

