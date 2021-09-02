const {Schema, model} = require('mongoose');

const pedidoSchema = new Schema({
    pedidop : String,
    // producto: { type: Schema.ObjectId, ref: "Producto" },
    Cantidad : Number, 
    // cliente: { type: Schema.ObjectId, ref: "Cliente" },
    Status : false,
    date: {
        type: Date,
        default: Date.now
    }
    },    { 
    timestamps : true
})

module.exports = model('Pedido', pedidoSchema);