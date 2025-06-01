import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Favorites from '../pages/Favorites';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:codigo" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favorites />} />  {/* rota nova */}
    </Routes>
  );
}
