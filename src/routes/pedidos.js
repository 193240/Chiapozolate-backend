const {Router} = require('express');
const router = Router();

const {getPedidos, crearPedido, getPedido, updatePedido} = require('../controllers/pedidosControlador');

router.route('/')
    .get(getPedidos)
    .post(crearPedido)


router.route('/:id')
     .get(getPedido)
     .put(updatePedido)
    //  .delete()    

module.exports = router;