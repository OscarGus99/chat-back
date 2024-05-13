const { Schema, model } = require('mongoose');


// Esquema Usuario
const Usuario_schema = Schema({

    // Creacion de los campos de las tablas
    nombre: {
        // Que tipo es:
        type: String,
        // Es requirido:
        require: true
    },
    email: {
        type: String,
        require: true,
        // Es unico el valor
        unique: true
    },

    password: {
        type: String,
        require: true
    },

    online: {
        type: Boolean,
        default: false
    }
});


// Devolvemos un objeto literal JSON
Usuario_schema.method('toJSON', function() {

    // Desestructuramos la version de MONGO, el ID de cada usuario de la BD
    // ...object es lo restante por decir 'nombre', 'email' y 'online'
    
    const { __v, _id, password, ...object } = this.toObject()

    // Crea una propiedad "uid" y guarda ahi el identificador de la base de datos
    object.uid = _id

    return object
})


// Exportamos el modelo
module.exports = model('Usuario', Usuario_schema)