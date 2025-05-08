import PagoForm from '../components/PagoForm';

function PagoPage() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Registrar Pago</h2>
        <PagoForm />
      </div>
    </div>
  );
}

export default PagoPage;

