const {Router} = require('express');
const router = Router();

const {getClientes} = require('../controllers/clientesControlador');

router.route('/')
    .get((req, res) => res.send('pedidos ruta'))


router.route('/:id')
    // .put()
    // .delete()    

module.exports = router;