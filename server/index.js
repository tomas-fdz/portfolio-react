const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const data = req.body;

  // Leer el archivo actual (si existe) y agregar el nuevo mensaje
  fs.readFile('messages.json', 'utf8', (err, fileData) => {
    const messages = err ? [] : JSON.parse(fileData || '[]');
    messages.push(data);

    fs.writeFile('messages.json', JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Error al guardar mensaje', err);
        return res.status(500).json({ error: 'No se pudo guardar el mensaje' });
      }
      res.status(200).json({ success: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
