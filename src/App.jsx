import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IngresoPage from './pages/IngresoPage';
import PagoPage from './pages/PagoPage';
import CeldaPage from './pages/CeldaPage'; 
import VehiculoPage from './pages/VehiculoPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/auto.png" 
              alt="Logo"
              width="100" 
              className="d-inline-block align-text-top me-2"
            />
            Sistema de Parqueadero
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/ingreso">Registrar Ingreso</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pago">Registrar Pago</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/celdas">Ver Celdas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehiculos">Historial Vehículos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5" style={{ marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingreso" element={<IngresoPage />} />
          <Route path="/pago" element={<PagoPage />} />
          <Route path="/celdas" element={<CeldaPage />} />
          <Route path="/vehiculos" element={<VehiculoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





