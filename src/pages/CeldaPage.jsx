import React from 'react';
import CeldaList from '../components/CeldaList';

const CeldaPage = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Parqueadero - Gestión de Celdas</h1>
        <CeldaList />
      </div>
    </div>
  );
};

export default CeldaPage;

