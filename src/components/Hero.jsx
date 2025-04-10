import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hola, soy <span className="text-blue-600 dark:text-blue-400">Tomás</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Desarrollador Frontend apasionado por crear experiencias digitales atractivas y funcionales.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Contactame
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

  
