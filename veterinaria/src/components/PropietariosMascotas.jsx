import React, { useEffect, useState } from 'react';

function PropietariosConMuchasMascotas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/propietarios_con_muchas_mascotas') // Cambia la ruta según tu backend
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Propietarios con más de 3 mascotas</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Teléfono</th>
            <th className="p-2 border">Total Mascotas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, idx) => (
            <tr key={idx}>
              <td className="p-2 border">{p.nombre}</td>
              <td className="p-2 border">{p.email}</td>
              <td className="p-2 border">{p.telefono}</td>
              <td className="p-2 border">{p.total_mascotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropietariosConMuchasMascotas;
