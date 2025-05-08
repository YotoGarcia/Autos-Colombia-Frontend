import React, { useState } from 'react';
import IngresoForm from "../components/IngresoForm";
import CeldaList from "../components/CeldaList";

function IngresoPage() {
  const [celdasActualizadas, setCeldasActualizadas] = useState(false);

  const handleActualizar = () => {
    setCeldasActualizadas(prev => !prev); // Cambia el estado para forzar recarga en CeldaList
  };

  return (
    <div>
      <h2>Registrar ingreso de Vehículo</h2>
      <IngresoForm onIngresoExitoso={handleActualizar} />

      <hr />

      <h3>Celdas Disponibles</h3>
      <CeldaList celdasActualizadas={celdasActualizadas} />
    </div>
  );
}

export default IngresoPage;

