const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Obtener datos de un pokemon por su nombre
app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(404).send('pokemon no encontrado');
    }
});

// Ruta para archivos estáticos (e.g. HTML, CSS)
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
});