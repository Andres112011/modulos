// Verificación de la existencia del archivo './config.js' (usando require.resolve)
try {
  const configPath = require.resolve('./config');  // Reemplaza con la ruta exacta si es diferente
  console.log(`El archivo 'config.js' está en: ${configPath}`);
} catch (error) {
  console.error('No se pudo encontrar el módulo "./config". Asegúrate de que la ruta sea correcta.');
}

// Ahora importamos el módulo normalmente
const express = require('express');
const cors = require('cors');
const dbconnect = require('./config'); // Importa la función dbconnect
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/empleados', require('./routes/empleado.routes'));
app.listen(3005, () => {
  console.log("El servidor está en el puerto 3005");
});

// Conexión a la base de datos
dbconnect();
