import React, { useState } from 'react';
import axios from 'axios';

const IngresoForm = () => {
  const [placa, setPlaca] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [ingresoInfo, setIngresoInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');
    setIngresoInfo(null);

    try {
    const response = await axios.post(
      `http://localhost:8080/api/ingresos?placa=${placa}`,
      {},
      { withCredentials: true }
    );
    const data = response.data;

    setIngresoInfo({
      placa: data.placa,
      celda: data.celda.nombre,
      hora: new Date(data.horaIngreso).toLocaleTimeString(),
    });

    setShowModal(true);
    setPlaca('');
  } catch (err) {
    setError('Error al registrar el ingreso.');
    console.error(err);
  }
  };

  const closeModal = () => {
    setShowModal(false);
    setIngresoInfo(null);
    
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Registrar Ingreso</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="placa" className="form-label">Placa del Vehículo</label>
            <input
              type="text"
              id="placa"
              className="form-control"
              placeholder="Ingrese la placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success">Registrar</button>
          </div>
        </form>

        {error && <div className="alert alert-danger mt-4" role="alert">{error}</div>}
      </div>

      {/* Modal de ingreso exitoso */}
      {showModal && ingresoInfo && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Ingreso Exitoso</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Placa:</strong> {ingresoInfo.placa}</p>
                <p><strong>Celda Asignada:</strong> {ingresoInfo.celda}</p>
                <p><strong>Hora de Ingreso:</strong> {ingresoInfo.hora}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngresoForm;
