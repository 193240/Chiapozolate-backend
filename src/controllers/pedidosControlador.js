const pedidosC = {};

const Pedido = require('../models/pedido');

pedidosC.getPedidos = async (req, res ) => {
    // let param = req.query
    // console.log(param)
   const pedidos = await Pedido.find(req.query).populate(['producto','cliente']);//devuelve arreglo 
    res.json(pedidos)
};

pedidosC.crearPedido = async (req, res ) => {
    const {producto, cantidad, cliente} = req.body;
    const newPedido = new Pedido({
        producto,
        cantidad,
        cliente,
        status: false
    });
    console.log(newPedido);
    await newPedido.save();
    res.json({message: 'pedido nuevo'})

};
pedidosC.updatePedido = async (req, res ) => {
    //const {status} = req.body;
    await Pedido.findOneAndUpdate({_id: req.params.id}, {
        status: true
    });
    res.json({message: 'pedido actualizado'});
}    

pedidosC.getPedido = async (req, res ) => {
   const pedido = await Pedido.findById(req.params.id).populate(['producto','cliente'])
    res.json(pedido);
    // res.json({message: 'obtener pedido'})

};

pedidosC.deletePedido = async (req, res ) => {
    await Pedido.findOneAndDelete(req.params.id);
    res.json({message: 'eliminar pedido'})

};

module.exports = pedidosC;