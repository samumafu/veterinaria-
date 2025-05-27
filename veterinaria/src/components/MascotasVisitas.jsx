import React from 'react';
import DashboardCard from './DashboardCard';

const MascotasCard = ({ mascotas, loading }) => {
  const renderMascota = (mascota) => (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div>
        <p className="font-medium text-gray-900">{mascota.nombre}</p>
        <p className="text-sm text-gray-600">{mascota.tipo} • {mascota.propietario}</p>
      </div>
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
        {mascota.total_visitas} visitas
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardCard
      title="Mascotas con Más Visitas"
      icon="🐕"
      data={mascotas}
      emptyMessage="No hay mascotas registradas"
      renderItem={renderMascota}
    />
  );
};

export default MascotasCard;