import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: 'Inicio', to: 'home' },
    { name: 'Sobre mí', to: 'about' },
    { name: 'Habilidades', to: 'skills' },
    { name: 'Contacto', to: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true}
            offset={-64}
            duration={500}
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
          >
            MiPortafolio
          </Link>
          
          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón modo oscuro */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <FaSun className="text-yellow-300"/> : <FaMoon className="text-gray-600"/>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

