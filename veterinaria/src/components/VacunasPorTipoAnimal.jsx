import React, { useEffect, useState } from 'react';

function VacunasPorTipoAnimal() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('/api/vacunas_por_tipo_animal') // Cambia la ruta según tu backend
        .then(res => res.json())
        .then(setData);
    }, []);

    return (
    <div>
        <h2 className="text-xl font-semibold mb-2">Vacunas por tipo de animal</h2>
        <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
            <tr>
            <th className="p-2 border">Tipo Animal</th>
            <th className="p-2 border">Cantidad Vacunas</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, idx) => (
            <tr key={idx}>
                <td className="p-2 border">{item.tipo_animal}</td>
                <td className="p-2 border">{item.total}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}

export default VacunasPorTipoAnimal;
