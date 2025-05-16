import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {
  const { codigo } = useParams();  // Pega o código do país a partir da URL
  const [pais, setPais] = useState(null);

  useEffect(() => {
    if (codigo) {
      // A URL de requisição agora está correta
      axios.get(`https://restcountries.com/v3.1/alpha/${codigo}`)
        .then((res) => setPais(res.data[0]))
        .catch((err) => console.error('Erro ao buscar país:', err));
    }
  }, [codigo]); // Refaz a requisição sempre que o parâmetro mudar

  if (!pais) return <p>Carregando...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{pais.name.common}</h1>
      <img src={pais.flags.svg} alt={pais.name.common} className="w-48 mb-4" />
      <p><strong>Capital:</strong> {pais.capital?.[0]}</p>
      <p><strong>Região:</strong> {pais.region}</p>
      <p><strong>População:</strong> {pais.population.toLocaleString()}</p>
    </div>
  );
};

export default Detalhes;
