import { useEffect, useState } from 'react';
import api from '../services/api';

function App() {
  const [mascotas, setMascotas] = useState([]);
  const [vacunas, setVacunas] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    api.get('/mascotas-mas-visitas/').then(res => setMascotas(res.data));
    api.get('/vacunas-por-tipo/').then(res => setVacunas(res.data));
    api.get('/propietarios-muchos-mascotas/').then(res => setPropietarios(res.data));
    api.get('/servicios-mas-solicitados/').then(res => setServicios(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-10 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 drop-shadow">🐶 Seguimiento Veterinario</h1>
        <p className="text-gray-600 mt-2 text-lg">Consultas avanzadas y estadísticas</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="🐾 Mascotas con más visitas al veterinario" data={mascotas} />
        <Card title="💉 Vacunas aplicadas por tipo de animal" data={vacunas} />
        <Card title="👨‍👩‍👧 Dueños con más de 3 mascotas" data={propietarios} />
        <Card title="🛠 Servicios veterinarios más solicitados" data={servicios} />
      </div>
    </div>
  );
}

function Card({ title, data }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h2>
      {data.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {data.map((item, index) => (
            <li key={index}>{Object.values(item).join(' - ')}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default App;
