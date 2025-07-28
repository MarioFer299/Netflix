import React from 'react';

const Input = ({ 
  icon: Icon, 
  type = "text", 
  className = "", 
  ...props 
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      )}
      <input
        type={type}
        className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-4 bg-gray-700 text-white rounded focus:outline-none focus:bg-gray-600 transition-colors placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;