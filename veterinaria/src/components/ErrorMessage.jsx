import React from 'react';

const ErrorMessage = ({ error, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="text-red-600 font-bold mb-2">¡Error!</div>
    <div className="text-gray-700 mb-4">{error}</div>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Reintentar
      </button>
    )}
  </div>
);

export default ErrorMessage;