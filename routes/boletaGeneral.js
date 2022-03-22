const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();
const boletaGeneralController = require('../controllers/BoletaGeneralController');


router.post('/boletaGeneral', boletaGeneralController.createBoletaGeneral)
router.get('/boletaGeneral', boletaGeneralController.consultBoletaGeneral);
router.get('/boletaGeneral/:id', boletaGeneralController.consultsBoletaGeneral);
router.put('/boletaGeneral/:id', boletaGeneralController.updateBoletaGeneral);
router.delete('/boletaGeneral/:id', boletaGeneralController.deleteBoletaGeneral);




//Tema del router
module.exports = router;