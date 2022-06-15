import mongoose from 'mongoose';

// Aqui el nombre de la base de datos en este caso test
/**
 * mongoose.connect(): permite recibir la url donde esta conectado nuestra base de datos
 */
mongoose.connect('mongodb://localhost/test', {
    // Aqui las configuraciones de mongoDB
})
    .then(db => console.log('Data base is conected'))
    .catch(err => console.log(err))