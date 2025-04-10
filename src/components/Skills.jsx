import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-600' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-600' },
  { icon: <FaJsSquare />, name: 'JavaScript', color: 'text-yellow-500' },
  { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-sky-400' },
  { icon: <FaGithub />, name: 'GitHub', color: 'text-gray-800 dark:text-white' }
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2>Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className={`text-5xl ${skill.color}`}>{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

  
