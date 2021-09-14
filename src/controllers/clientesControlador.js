const clienteC = {};

const cliente = require('../models/cliente');

clienteC.getClientes = async (req, res ) => {
   const clientes = await cliente.find();//devuelve arreglo 
    res.json(clientes)

};

clienteC.crearCliente = async (req, res ) => {
    const {name,lastname,direccion,telefono} = req.body;
    const newCliente = new cliente({
        name,
        lastname,
        direccion,
        telefono
    });
    await newCliente.save();
    res.json({message: 'Cliente nuevo'})
}

clienteC.updateCliente = (req, res ) => res.json({message: 'cliente actualizado'});

clienteC.getCliente = async (req, res ) => {
    console.log(req.params.id);
    const client = await cliente.findById(req.params.id);
    res.json(client);
};

// pedidos.deleteCliente = (req, res ) => res.json({message: 'eliminar pedido'});

module.exports = clienteC;