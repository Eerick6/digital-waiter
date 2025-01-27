const express = require("express");
const path = require("path");

const app = express();

// Ruta a los archivos compilados de Angular en la carpeta "dist"
const DIST_DIR = path.join(__dirname, "dist");
const INDEX_FILE = path.join(DIST_DIR, "index.html");

// Middleware para servir archivos estáticos
app.use(express.static(DIST_DIR));

// Maneja cualquier otra ruta y devuelve `index.html`
app.get("*", (req, res) => {
  res.sendFile(INDEX_FILE);
});

// Puerto predeterminado (puede ser configurado por Railway)
const PORT = process.env.PORT || 8080;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
