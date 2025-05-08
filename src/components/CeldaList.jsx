import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CeldaList = ({ celdasActualizadas }) => {
  const [celdas, setCeldas] = useState([]);
  const [error, setError] = useState(null);

  const obtenerCeldas = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/celdas');
      setCeldas(response.data);
    } catch (err) {
      setError('Error al obtener celdas');
    }
  };

  
  useEffect(() => {
    obtenerCeldas();
  }, [celdasActualizadas]);  

  return (
    <div className="row">
      {error && <p>{error}</p>}
      {celdas.map(celda => (
        <div className="col-3 mb-4" key={celda.id}>
          <div className={`card text-white ${celda.ocupada ? 'bg-danger' : 'bg-success'}`}>
            <div className="card-body text-center">
              <h5>{celda.nombre}</h5>
              <p>{celda.ocupada ? 'Ocupada' : 'Disponible'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CeldaList;



