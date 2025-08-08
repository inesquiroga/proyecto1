// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde "public"
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Tienda online en http://localhost:${port}`);
});
