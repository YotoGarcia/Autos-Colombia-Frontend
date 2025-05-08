import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center">
        <h1 className="mb-4">Parqueadero - Sistema de Gestión</h1>
        <nav>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/ingreso" className="btn btn-primary w-100">Registrar Ingreso</Link>
            </li>
            <li className="list-group-item">
              <Link to="/pago" className="btn btn-success w-100">Registrar Pago</Link>
            </li>
            <li className="list-group-item">
              <Link to="/celdas" className="btn btn-info w-100 text-white">Ver Celdas</Link>
            </li>
            <li className="list-group-item">
              <Link to="/vehiculos" className="btn btn-secondary w-100">Ver Vehículos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;

        