import React from 'react';
import { useFavorites } from '../../context/FavoriteContext';
import FavoriteButton from '../../components/FavoriteButton';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Meus Favoritos</h1>
        <p>Você ainda não adicionou nenhum país aos favoritos.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Meus Favoritos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map(country => (
          <div key={country.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <Link to={`/detalhes/${country.id}`}>
              <img
                src={country.flags.png}
                alt={country.nome}
                className="w-full h-32 object-contain mb-4 mx-auto"
              />
              <h2 className="text-xl font-semibold">{country.nome}</h2>
            </Link>
            <FavoriteButton item={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
