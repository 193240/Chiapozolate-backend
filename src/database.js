require('dotenv').config();
const mongoose = require('mongoose');

// console.log(process.env.mongoDB_URI)
const URI = process.env.mongoDB_URI 
? process.env.mongoDB_URI
: 'mongodb://localhost/chiapozolateDB'; //si existe el archivo configuracion env

mongoose.connect(URI,{
    // useNewUrlParser: true, 
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false

});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB esta conectado');
});