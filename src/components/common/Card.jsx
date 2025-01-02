import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] ${className}`}>
    {children}
  </div>
);