import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const FavoriteButton = ({ item }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(item);

  return (
    <button
      onClick={() => toggleFavorite(item)}
      className="text-2xl hover:scale-110 transition-transform"
      title={isFavorited ? "Desfavoritar" : "Favoritar"}
    >
      {isFavorited ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;
