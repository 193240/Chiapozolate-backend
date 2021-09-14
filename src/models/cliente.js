const {Schema, model} = require('mongoose');

const cliente = new Schema({
    name: {
        type : String,
        require : true,
        trim : true
    },
    lastname: {
        type : String,
        require : true,
        trim : true
    },
    direccion: {
        type : String,
        require : true,
        trim : true
    },
    telefono: {
        type : Number,
        require : true,
        trim : true,
        unique : true
    },
},{timestamps:true})

module.exports = model('Cliente', cliente);