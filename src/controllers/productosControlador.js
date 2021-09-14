const productsC = {};

const Producto = require('../models/producto');

productsC.getProducts = async (req, res ) => {
    const productos = await Producto.find();//devuelve arreglo de todo lo que encuentra
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
    const {name, stock, precio}= req.body;
    const productoViejo = await Producto.findById(req.params.id);
    aux = productoViejo.stock
    if(stock){
        aux = productoViejo.stock + parseInt(stock);
    }

    await Producto.findOneAndUpdate({_id: req.params.id},{
        name,
        stock: aux,
        precio
    })
    res.json({message: 'producto actualizado'})
};

productsC.getProduct = async (req, res ) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto)
};

productsC.deleteProduct = async (req, res ) => {
    await Producto.findOneAndDelete(req.params.id);
    res.json({message: 'producto elimnado'})
};

module.exports = productsC;