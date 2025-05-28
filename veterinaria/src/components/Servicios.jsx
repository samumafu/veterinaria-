import React from 'react';
import DashboardCard from './DashboardCard';

const ServiciosCard = ({ servicios, loading }) => {
  const renderServicio = (servicio) => (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="font-medium text-gray-900">
        {servicio.servicio || servicio.nombre || servicio.tipo || 'Servicio'}
      </span>
      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
        {servicio.total || servicio.count || servicio.cantidad || 0} veces
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
            <div className="h-6 bg-gray-200 rounded w-52"></div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardCard
      title="Servicios Más Solicitados"
      icon="🏆"
      data={servicios}
      emptyMessage="No hay servicios registrados"
      renderItem={renderServicio}
    />
  );
};

export default ServiciosCard;