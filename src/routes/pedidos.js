const {Router} = require('express');
const router = Router();

const {getPedidos, crearPedido, getPedido, deletePedido} = require('../controllers/pedidosControlador');

router.route('/')
    .get(getPedidos)
    .post(crearPedido)


router.route('/:id')
        .get(getPedido)
    // .put()
    // .delete()    

module.exports = router;