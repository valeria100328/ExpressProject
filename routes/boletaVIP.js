const express = require('express')
const router = express.Router();
const boletaVipController = require('../controllers/boletaVipController')


router.post('/', boletaVipController.crearBoleta)
router.get('/', boletaVipController.consultarBoletas);
router.get('/:id', boletaVipController.consultarBoleta);
router.put('/:id', boletaVipController.actualizarBoleta);
router.delete('/:id', boletaVipController.eliminarBoleta);


//Tema del router
module.exports = router;