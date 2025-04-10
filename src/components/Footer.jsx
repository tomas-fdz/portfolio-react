import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} Tomás Fernández. Todos los derechos reservados.
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://github.com/tomas-fdz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-700 dark:hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-700 dark:hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

