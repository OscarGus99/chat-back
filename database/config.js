
// lLamamos a la libreria.
const mongoose = require('mongoose');

// Actualiza el código de acuerdo a la version de Mongoose 7.
mongoose.set("strictQuery", false);

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_CNN_STRING);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - vea logs');
    }
}

module.exports = {
    dbConnection
}