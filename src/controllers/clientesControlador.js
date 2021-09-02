const clienteC = {};

const clinte = require('../models/cliente');

clienteC.getClientes = async (req, res ) => {
   const clientes = await pedido.find();//devuelve arreglo 
    res.json(clientes)

};

clienteC.crearCliente = (req, res ) => res.json({message: 'crear pedido'});

clienteC.updateCliente = (req, res ) => res.json({message: 'cactualizar producto'});

clienteC.getCliente = (req, res ) => res.json({message: 'obtener pedido'});

// pedidos.deleteCliente = (req, res ) => res.json({message: 'eliminar pedido'});

module.exports = clienteC;