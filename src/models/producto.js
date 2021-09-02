const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type : String,
        require : true,
        trim : true,
        unique : true
    },
    stock: {
        type : Number,
        required : true
    },
    precio : Number
})

module.exports = model('Producto', productSchema);