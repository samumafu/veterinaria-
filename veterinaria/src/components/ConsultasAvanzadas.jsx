import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ConsultasAvanzadas = () => {
  const [mascotasVisitas, setMascotasVisitas] = useState([]);
  const [vacunasPorTipo, setVacunasPorTipo] = useState([]);
  const [propietariosMuchos, setPropietariosMuchos] = useState([]);
  const [serviciosSolicitados, setServiciosSolicitados] = useState([]);

  useEffect(() => {
    api.get('/api/mascotas-mas-visitas/')
      .then(res => setMascotasVisitas(res.data)).catch(console.error);

    api.get('/api/vacunas-por-tipo/')
      .then(res => setVacunasPorTipo(res.data)).catch(console.error);

    api.get('/api/propietarios-muchos-mascotas/')
      .then(res => setPropietariosMuchos(res.data)).catch(console.error);

    api.get('/api/servicios-mas-solicitados/')
      .then(res => setServiciosSolicitados(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Consultas Avanzadas</h2>

      <section>
        <h3>🐾 Mascotas con más visitas al veterinario</h3>
        <ul>
          {mascotasVisitas.map((m, i) => (
            <li key={i}>{m.nombre_mascota} - {m.total_visitas} visitas</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>💉 Vacunas aplicadas por tipo de animal</h3>
        <ul>
          {vacunasPorTipo.map((v, i) => (
            <li key={i}>{v.tipo_animal}: {v.total_vacunas} vacunas</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>👨‍👩‍👧 Dueños con más de 3 mascotas</h3>
        <ul>
          {propietariosMuchos.map((p, i) => (
            <li key={i}>{p.nombre} - {p.total_mascotas} mascotas</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>🛠 Servicios veterinarios más solicitados</h3>
        <ul>
          {serviciosSolicitados.map((s, i) => (
            <li key={i}>{s.servicio}: {s.total} veces</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ConsultasAvanzadas;
