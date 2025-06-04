import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFavorites } from '../../context/FavoritesContext';

const Home = () => {
  const [facts, setFacts] = useState([]);
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    axios
      .get('https://catfact.ninja/facts?limit=20')
      .then(response => setFacts(response.data.data))
      .catch(error => console.error('Erro ao buscar fatos:', error));
  }, []);

  return (
    <div className="p-6 mt-1">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        🐾 Fatos Curiosos sobre Gatos 🐾
      </h1>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facts.map((factObj, index) => {
          const isFavorited = favorites.includes(factObj.fact);
          return (
            <li
              key={index}
              className="bg-yellow-100 border-l-4 border-yellow-400 rounded-xl p-4 shadow hover:shadow-lg transition duration-300"
            >
              <p
                className="cursor-pointer text-base text-gray-800 hover:text-blue-600 transition-colors mb-3"
                onClick={() => navigate('/detalhes', { state: { fact: factObj.fact } })}
              >
                🐱 {factObj.fact}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => toggleFavorite(factObj.fact)}
                  className="text-2xl hover:scale-110 transition-transform"
                  title={isFavorited ? 'Desfavoritar' : 'Favoritar'}
                >
                  {isFavorited ? '❤️' : '🤍'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
