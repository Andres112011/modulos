const mongoose = require('mongoose');

const dbconnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/empleados', {  // Asegúrate de que la URL de tu base de datos esté correcta
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos establecida.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
};

module.exports = dbconnect;
