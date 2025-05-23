import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem('rol'); // obtienes rol guardado

  if (!userRole || !allowedRoles.includes(userRole)) {
    // si no está logueado o rol no permitido, redirige a login
    return <Navigate to="/" replace />;
  }

  return children; // si está permitido, renderiza el componente hijo
};

export default ProtectedRoute;
