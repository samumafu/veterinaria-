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
        <ExpandableCard
          title="🐾 Mascotas con más visitas"
          description="Listado de mascotas que han ido más veces al veterinario"
          data={mascotas}
          fields={['nombre', 'tipo', 'total_visitas']} 
        />

        <ExpandableCard
          title="💉 Vacunas por tipo de animal"
          description="Cantidad de vacunas aplicadas según el tipo de mascota"
          data={vacunas}
        />

        <ExpandableCard
          title="👨‍👩‍👧 Propietarios con más de 3 mascotas"
          description="Dueños que tienen 4 o más animales registrados"
          data={propietarios}
          fields={['nombre', 'total_mascotas','email', 'telefono']} 
        />

        <ExpandableCard
          title="🛠 Servicios más solicitados"
          description="Servicios veterinarios que han sido más utilizados"
          data={servicios}
        
        />
      </div>
    </div>
  );
}

function ExpandableCard({ title, description, data, fields = [] }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const displayedData = expanded ? data : data.slice(0, 3);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
      onClick={toggleExpanded}
    >
      <h2 className="text-2xl font-semibold text-indigo-600 mb-1">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>

      {data.length > 0 ? (
        <ul className="space-y-2 text-gray-700">
          {displayedData.map((item, index) => (
            <li
              key={index}
              className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition"
            >
              {(fields.length > 0 ? fields : Object.keys(item)).map((field, i) => (
                <div key={i}>
                  <span className="font-medium capitalize">{field.replace(/_/g, ' ')}:</span>{' '}
                  {item[field]}
                </div>
              ))}
            </li>
          ))}
          {!expanded && data.length > 3 && (
            <li className="text-indigo-500 text-sm mt-2 underline">Ver más...</li>
          )}
          {expanded && (
            <li className="text-indigo-400 text-sm mt-2 underline">Ver menos</li>
          )}
        </ul>
      ) : (
        <p className="text-gray-400 italic">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default App;
