import React from 'react';
import DashboardCard from './DashboardCard';

const VacunasCard = ({ vacunas, loading }) => {
  const renderVacuna = (vacuna) => (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="font-medium text-gray-900 capitalize">
        {vacuna.tipo_animal || vacuna.tipo || 'Tipo no especificado'}
      </span>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
        {vacuna.total || vacuna.count || vacuna.cantidad || 0} vacunas
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
            <div className="h-6 bg-gray-200 rounded w-56"></div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardCard
      title="Vacunas por Tipo de Animal"
      icon="💉"
      data={vacunas}
      emptyMessage="No hay registros de vacunas"
      renderItem={renderVacuna}
    />
  );
};

export default VacunasCard;