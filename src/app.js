const express = require('express');
const cors = require('cors');

const app = express();

//settings
app.set('port', process.env.port || 4001);

//middlewares 
app.use(cors());
app.use(express.json());

//routes
app.use('/pedidos', require('./routes/pedidos') );
app.use('/productos', require('./routes/productos'));
app.use('/clientes', require('./routes/clientes'));

module.exports = app;
