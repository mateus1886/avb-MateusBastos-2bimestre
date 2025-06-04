import { useLocation, useNavigate } from 'react-router-dom';

const Detalhes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fact = location.state?.fact;

  const handleBack = () => navigate('/');

  if (!fact) {
    return (
      <div className="p-6 mt-20 text-center text-red-500 font-bold text-xl">
        ❌ Fato não encontrado.
      </div>
    );
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        📋 Detalhes do Fato
      </h1>
      <div className="bg-purple-100 border-l-4 border-purple-400 p-6 rounded-lg shadow max-w-2xl mx-auto text-lg text-gray-800">
        🐾 {fact}
      </div>
    </div>
  );
};

export default Detalhes;
