// src/components/Navbar.jsx
import { Link } from 'react-router-dom';  // Importando o Link

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Países
        </Link>

        {/* Links de navegação */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/favoritos" className="text-white hover:text-gray-200">Favoritos</Link>
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
