import React from 'react';
import MascotasMasVisitas from './components/MascotasMasVisitas';
import VacunasPorTipoAnimal from './components/VacunasPorTipoAnimal';
import PropietariosMascotas from './components/PropietariosMascotas';

function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Dashboard Veterinaria</h1>
      <MascotasMasVisitas />
      <VacunasPorTipoAnimal />
      <PropietariosMascotas />
    </div>
  );
}

export default App;
