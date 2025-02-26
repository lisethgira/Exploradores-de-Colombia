const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: '¡Hola, API con Express!' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
