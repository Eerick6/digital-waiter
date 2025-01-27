const express = require('express');
const path = require('path');
const app = express();

// Configura el puerto dinámico que Railway requiere.
const PORT = process.env.PORT || 8080;

// Usa express para servir los archivos estáticos generados por Angular
app.use(express.static(path.join(__dirname, 'dist', 'digital-waiter')));

// Rutas para la SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'digital-waiter', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
