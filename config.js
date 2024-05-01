const mongoose = require ('mongoose');

const dbconnect = () => {

mongoose.connect('mongodb://localhost:27017/users_prueba', {})
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});
}

module.exports = dbconnect;