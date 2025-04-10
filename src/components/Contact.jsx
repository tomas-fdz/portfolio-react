import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2>Contacto</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          ¿Te gustaría trabajar juntos o tenés alguna pregunta? ¡Escribime!
        </p>

        <form
          action="https://formspree.io/f/your-form-id" // Reemplazá esto por tu ID real
          method="POST"
          className="max-w-md mx-auto mt-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <button
            type="submit"
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
