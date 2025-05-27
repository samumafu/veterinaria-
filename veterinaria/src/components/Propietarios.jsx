import React from 'react';
import DashboardCard from './DashboardCard';

const PropietariosCard = ({ propietarios, loading }) => {
  const renderPropietario = (propietario) => (
    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <p className="font-medium text-gray-900">{propietario.nombre}</p>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {propietario.total_mascotas} mascotas
        </span>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <p className="flex items-center">
          <span className="mr-2">✉️</span>
          <span className="truncate">{propietario.email}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-2">📞</span>
          {propietario.telefono}
        </p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
            <div className="h-6 bg-gray-200 rounded w-64"></div>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="p-3 bg-gray-100 rounded-lg">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardCard
      title="Propietarios con Más de 3 Mascotas"
      icon="👥"
      data={propietarios}
      emptyMessage="No hay propietarios con muchas mascotas"
      renderItem={renderPropietario}
    />
  );
};

export default PropietariosCard;