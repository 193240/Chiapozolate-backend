const {Router} = require('express');
const router = Router();

const {getClientes, crearCliente, updateCliente, getCliente} = require('../controllers/clientesControlador');

router.route('/')
    .get(getClientes)
    .post(crearCliente)


router.route('/:id')
    .get(getCliente)
    .put(updateCliente)
    // .delete()    

module.exports = router;