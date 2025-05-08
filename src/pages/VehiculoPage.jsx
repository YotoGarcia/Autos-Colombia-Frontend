import VehiculoList from '../components/VehiculoList';

function VehiculoPage() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Lista de Vehículos</h2>
        <VehiculoList />
      </div>
    </div>
  );
}

export default VehiculoPage;
