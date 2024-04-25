const mongoose = require('mongoose');

async function dbconnect() {
    try {
       await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log('Conexión a la base de datos establecida con éxito');
    } catch (error) {
        console.error('Error conectando a la base de datos: ', error);
    }
}

module.exports = dbconnect; 
