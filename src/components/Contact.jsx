import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Mensaje enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error(error);
      alert('Error de red');
    }
  };

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
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
