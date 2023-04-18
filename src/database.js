const mongoose = require('mongoose');  //Se llama a mongoose

mongoose.connect('', {  //Se conecta a mi base de datos 
    useNewUrlParser: true
})
    .then(db => console.log('Conectado papi'))//Se conecto de forma correcta
    .catch(err => console.log('Diay pa, en que lo tengo')); //Error en la conexión

    
