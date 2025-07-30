import React from 'react';

const Button = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "", 
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-semibold rounded transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-600 bg-opacity-70 text-white hover:bg-opacity-90",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;