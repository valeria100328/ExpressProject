const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();
//BoletaGeneral
const boletaGeneralController = require('../controllers/BoletaGeneralController');
//Cliente
const ClienteController = require('../controllers/clienteController')

//Boleta General
router.post('/boletaGeneral', boletaGeneralController.createBoletaGeneral)
router.get('/boletaGeneral', boletaGeneralController.consultBoletaGeneral);
router.get('/boletaGeneral/:id', boletaGeneralController.consultsBoletaGeneral);
router.put('/boletaGeneral/:id', boletaGeneralController.updateBoletaGeneral);
router.delete('/boletaGeneral/:id', boletaGeneralController.deleteBoletaGeneral);

//Cliente
router.post('/cliente', ClienteController.createClient)
router.get('/cliente', ClienteController.consultClient);
router.get('/cliente/:id', ClienteController.consultsClient);
router.put('/cliente/:id', ClienteController.updateClient)
router.delete('/cliente/:id', ClienteController.deleteClient);



module.exports = router;