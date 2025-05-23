import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ role }) {
  return (
    <nav>
    <Link to="/" >Inicio</Link>

      {(role === 'ROLE_VENDEDOR') && (
        <>
          <Link to="/vendedor/ingresos" >Ingresos</Link>
          <Link to="/vendedor/pagos" >Pagos</Link>
          <Link to="/vendedor/celdas" >Celdas</Link>
        </>
      )}

      {role === 'ROLE_ADMINISTRADOR' && (
        <>
          <Link to="/admin/usuarios" >Usuarios</Link>
          <Link to="/admin/vehiculos" >Vehículos</Link>
          <Link to="/admin/pago" >Pagos</Link>
          <Link to="/admin/celda" >Celdas</Link>
          <Link to="/admin/ingreso" >Registrar Vehículo</Link>
          <Link to="/admin/historial" >Historial de pagos</Link>
        </>
      )}

      <button
        onClick={() => {
          console.log('Cerrar sesión');
        }} >
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Navbar;
