import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-100 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-blue-800 text-xl font-bold hover:text-blue-600 transition-colors duration-300"
        >
          🏠 Início
        </Link>

        <Link
          to="/favoritos"
          className="text-blue-800 text-xl font-bold hover:text-blue-600 transition-colors duration-300"
        >
          ⭐ Favoritos
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
