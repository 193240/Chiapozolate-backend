const productsC = {};

const Producto = require('../models/producto');

productsC.getProducts = async (req, res ) => {
    const productos = await Producto.find();//devuelve arreglo
    console.log(productos)
    res.json(productos)
};

productsC.createProduct = async (req, res ) => {
    const {name, stock, precio} = req.body;
    const newProducto = new Producto({
        name: name,
        stock: stock,
        precio: precio
    });
    await newProducto.save();
    res.json({message: ' producto nuevo'})
};

productsC.updateProduct = async (req, res ) => {
    console.log(req.params.id)
    const {name, stock, precio}= req.body;
    //cosnt Stock = sumar con lo que estaba anteriromente
    // cosnt newstock = stock +

    await Producto.findOneAndUpdate({_id: req.params.id},{
        name,
        stock,
        precio
    })
    res.json({message: 'producto actualizado'})
};

productsC.getProduct = async (req, res ) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto)
    res.json({message: 'obtener producto'})
};

productsC.deleteProduct = async (req, res ) => {

    res.json({message: 'eliminar producto'})
};

module.exports = productsC;