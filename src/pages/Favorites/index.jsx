import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">😿 Nada por aqui!</h1>
        <p className="text-lg">Você ainda não colocou nenhum fato nos seus favoritos. Bora favoritar? 🐾</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">💖 Meus Fatos Favoritos</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((fact, index) => (
          <li
            key={index}
            className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p
              onClick={() => navigate('/detalhes', { state: { fact } })}
              className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition-colors mb-3"
            >
              🐱 {fact}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => toggleFavorite(fact)}
                className="text-2xl hover:scale-110 transition-transform"
                title="Tirar dos favoritos"
              >
                ❤️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
