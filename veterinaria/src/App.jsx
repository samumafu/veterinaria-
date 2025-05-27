import React, { useState, useEffect } from 'react';
import MascotasCard from './components/MascotasVisitas';
import VacunasCard from './components/VacunasporTipo';
import PropietariosCard from './components/Propietarios';
import ServiciosCard from './components/Servicios';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const Dashboard = () => {
  const [data, setData] = useState({
    mascotas: [],
    vacunas: [],
    propietarios: [],
    servicios: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Configuración de la API
  const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://tu-servidor-django.com' 
    : 'http://localhost:8000';

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  };

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [mascotasData, vacunasData, propietariosData, serviciosData] = await Promise.all([
        fetchData('/mascotas-mas-visitas'),
        fetchData('/vacunas-por-tipo-animal'),
        fetchData('/propietarios-con-muchas-mascotas'),
        fetchData('/servicios-mas-solicitados')
      ]);

      setData({
        mascotas: mascotasData,
        vacunas: vacunasData,
        propietarios: propietariosData,
        servicios: serviciosData
      });
      
      setLastUpdate(new Date());
    } catch (err) {
      setError(err.message || 'Error al cargar los datos');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Si hay error, mostrar componente de error
  if (error && !loading) {
    return (
      <ErrorMessage 
        error={error} 
        onRetry={fetchAllData}
      />
    );
  }

  // Si está cargando por primera vez, mostrar spinner
  if (loading && !lastUpdate) {
    return <LoadingSpinner message="Cargando dashboard..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🏥 Dashboard Veterinaria</h1>
              <p className="text-gray-600 mt-2">Panel de estadísticas y reportes del sistema</p>
            </div>
            
            {/* Indicador de estado */}
            <div className="flex items-center space-x-4">
              {loading && (
                <div className="flex items-center text-blue-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  <span className="text-sm">Actualizando...</span>
                </div>
              )}
              
              {lastUpdate && (
                <div className="text-sm text-gray-500">
                  Última actualización: {lastUpdate.toLocaleTimeString('es-ES')}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MascotasCard mascotas={data.mascotas} loading={loading} />
          <VacunasCard vacunas={data.vacunas} loading={loading} />
          <PropietariosCard propietarios={data.propietarios} loading={loading} />
          <ServiciosCard servicios={data.servicios} loading={loading} />
        </div>

        {/* Panel de control */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Control del Dashboard</h3>
              <p className="text-sm text-gray-600">
                Gestiona la actualización y visualización de datos
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={fetchAllData}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block mr-2"></div>
                    Actualizando...
                  </>
                ) : (
                  <>🔄 Actualizar Datos</>
                )}
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium shadow-sm"
              >
                ↻ Recargar Página
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">{data.mascotas.length}</div>
            <div className="text-sm text-gray-600">Mascotas Activas</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">{data.vacunas.length}</div>
            <div className="text-sm text-gray-600">Tipos de Vacunas</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">{data.propietarios.length}</div>
            <div className="text-sm text-gray-600">Propietarios VIP</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">{data.servicios.length}</div>
            <div className="text-sm text-gray-600">Servicios Populares</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;