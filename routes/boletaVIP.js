const express = require('express')
const router = express.Router();
const boletaVipController = require('../controllers/boletaVipController')


router.post('/boletavip', boletaVipController.crearBoleta)
router.get('/boletavip', boletaVipController.consultarBoletas);
router.get('/boletavip/:id', boletaVipController.consultarBoleta);
router.put('/boletavip/id', boletaVipController.actualizarBoleta);
router.delete('/boletavip/:id', boletaVipController.eliminarBoleta);


//Tema del router
module.exports = router;
