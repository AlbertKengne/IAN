import React from 'react';

export const Button = ({ 
  children, 
  type = 'button',
  variant = 'primary',
  fullWidth,
  onClick,
}) => {
  const baseStyles = "inline-flex justify-center items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-secondary focus:ring-primary",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </button>
  );
};