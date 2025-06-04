import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar /> {/* Navbar visível em todas as páginas */}
        <div className="pt-20"> {/* Espaço para não esconder o conteúdo */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
