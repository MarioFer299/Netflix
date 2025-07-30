import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const LoginPage = ({ onSwitchToRegister }) => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    const result = await login(formData.email, formData.password);
    if (!result.success) {
      setError(result.error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ 
          backgroundImage: "url(https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Netflix Logo */}
      <div className="absolute top-8 left-4 md:left-8">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold">NETFLIX</h1>
      </div>

      {/* Login Form */}
      <div className="relative z-10 bg-black bg-opacity-75 p-8 md:p-16 rounded-lg w-full max-w-md mx-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          Iniciar sesión
        </h2>
        
        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <div className="relative">
            <Input
              icon={Lock}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            ¿Primera vez en Netflix?{' '}
            <button 
              onClick={onSwitchToRegister}
              className="text-white hover:underline font-semibold"
            >
              Suscríbete ahora
            </button>
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            <strong>Demo:</strong> Usa cualquier email y contraseña para ingresar
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;