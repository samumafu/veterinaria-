import React from 'react';

const LoadingSpinner = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
    <span className="text-blue-600 font-medium">{message || 'Cargando...'}</span>
  </div>
);

export default LoadingSpinner;