const pedidosC = {};

const Pedido = require('../models/pedido');

pedidosC.getPedidos = async (req, res ) => {
   const pedidos = await Pedido.find();//devuelve arreglo 
    res.json(pedidos)

};

// pedidosC.getPedidos = async (req, res ) => {
//     const pedidos = await pedido.find().populate({ path: 'cliente', model: cliente });//devuelve arreglo 
//      res.json(pedidos)
 
//  };

pedidosC.crearPedido = async (req, res ) => {
    const {pedidop, cantidad, date} = req.body;
    const newPedido = new Pedido({
        pedidop: pedidop,
        cantidad: cantidad,
        date: date
    });
    console.log(newPedido);
    await newPedido.save();
    res.json({message: 'pedido nuevo'})

};
//pedidosC.updateProduct = (req, res ) => res.json({message: 'cactualizar producto'});

pedidosC.getPedido = async (req, res ) => {
    console.log(req.params.id)
   const pedido = await Pedido.findById(req.params.id)
   console.log(pedido)
    res.json({message: 'obtener pedido'})

};

pedidosC.deletePedido = async (req, res ) => {
    await Pedido.findOneAndDelete(req.params.id);
    res.json({message: 'eliminar pedido'})

};

module.exports = pedidosC;