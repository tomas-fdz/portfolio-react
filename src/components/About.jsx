import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2>Sobre mí</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Soy un desarrollador full-stack apasionado por crear experiencias web modernas y atractivas. 
          Me encanta aprender nuevas tecnologías y colaborar en proyectos creativos. 
          Actualmente estoy construyendo este portafolio para mostrar lo que sé hacer y seguir mejorando cada día.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
