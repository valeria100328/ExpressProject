const express = require('express');
const router = express.Router();
const boletaVipController = require('../controllers/boletaVipController');
const eventoRataBlancaController = require('../controllers/eventoRataBlancaController');

//BOLETA VIP
router.post('/boletaVIP', boletaVipController.crearBoleta)
router.get('/boletaVIP', boletaVipController.consultarBoletas);
router.get('/boletaVIP/:id', boletaVipController.consultarBoleta);
router.put('/boletaVIP/:id', boletaVipController.actualizarBoleta);
router.delete('/boletaVIP/:id', boletaVipController.eliminarBoleta);

//EVENTO RATA BLANCA
router.post('/eventoRB', eventoRataBlancaController.crearEventoRB)
router.get('/eventoRB', eventoRataBlancaController.consultarEventosRB);
router.get('/eventoRB/:id', eventoRataBlancaController.consultarEventoRB);
router.put('/eventoRB/:id', eventoRataBlancaController.actualizarEventoRB);
router.delete('/eventoRB/:id', eventoRataBlancaController.eliminarEventoRB);

module.exports = router;
