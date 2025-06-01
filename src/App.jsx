import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { FavoriteProvider } from './context/FavoriteContext';  // Importa o provider

function App() {
  return (
    <FavoriteProvider> {/* Envolvendo a app inteira com o contexto */}
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
