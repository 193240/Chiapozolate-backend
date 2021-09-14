const {Schema, model} = require('mongoose');

const pedidoSchema = new Schema({
    producto: { type: Schema.ObjectId, ref: "Producto" },
    cantidad : Number, 
    cliente : {type: Schema.ObjectId, ref: "Cliente"},
    status : Boolean,
     date: {
        type: Date,
        default: Date.now
     }
})


module.exports = model('Pedido', pedidoSchema);