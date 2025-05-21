import React, { useEffect, useState } from 'react';

function MascotasMasVisitas() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('/api/mascotas_mas_visitas') // Cambia la ruta según tu backend
        .then(res => res.json())
        .then(setData);
    }, []);

    return (
    <div>
        <h2 className="text-xl font-semibold mb-2">Mascotas con más visitas</h2>
        <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
            <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Tipo</th>
            <th className="p-2 border">Propietario</th>
            <th className="p-2 border">Total Visitas</th>
            </tr>
        </thead>
        <tbody>
            {data.map((m, idx) => (
            <tr key={idx}>
                <td className="p-2 border">{m.nombre}</td>
                <td className="p-2 border">{m.tipo}</td>
                <td className="p-2 border">{m.propietario}</td>
                <td className="p-2 border">{m.total_visitas}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}

export default MascotasMasVisitas;
