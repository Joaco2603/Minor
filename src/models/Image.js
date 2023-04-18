const { Schema, model } = require('mongoose'); // Se llama la funcion de mongo para crear un schema  
const mongoose = require('mongoose'); //Se llama a mongo en su totalidad

const imageSchema = new Schema({  //Se crea la constante imageShema como un nuevo schema para mongo
    title: {type: String}, //Se declara como texto el titulo
    description: {type: String}, //Descripcion del objeto
    filename: {type: String}, //Nombre del archivo
    path: {type: String}, //Ruta del archivo
    originalname: {type: String}, //Nombre original del archivo
    mimetype: {type: String}, //Caracteristicas
    size: { type: Number}, //Tamaño
    created_at: {type: Date, default: Date.now()} //Fecha de crecion
});

module.exports = model('Image', imageSchema);