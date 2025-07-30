import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Componente para manejar la navegación entre páginas
const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState('login');

  // Si el usuario está autenticado, mostrar la página principal
  if (isAuthenticated) {
    return <HomePage />;
  }

  // Si no está autenticado, mostrar login o registro según el estado
  switch (currentView) {
    case 'register':
      return (
        <RegisterPage 
          onSwitchToLogin={() => setCurrentView('login')} 
        />
      );
    case 'login':
    default:
      return (
        <LoginPage 
          onSwitchToRegister={() => setCurrentView('register')} 
        />
      );
  }
};

// Componente principal de la aplicación
const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        <AppRouter />
      </div>
    </AuthProvider>
  );
};

export default App;