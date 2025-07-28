import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const RegisterPage = ({ onSwitchToLogin }) => {
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validaciones
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos los campos son requeridos');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return;
    }
    
    const result = await register(formData.name, formData.email, formData.password);
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

      {/* Register Form */}
      <div className="relative z-10 bg-black bg-opacity-75 p-8 md:p-16 rounded-lg w-full max-w-md mx-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          Crear cuenta
        </h2>
        
        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            icon={User}
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
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
              placeholder="Contraseña (mínimo 6 caracteres)"
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
          
          <div className="relative">
            <Input
              icon={Lock}
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <button 
              onClick={onSwitchToLogin}
              className="text-white hover:underline font-semibold"
            >
              Inicia sesión
            </button>
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            Al crear una cuenta, aceptas nuestros términos y condiciones
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;