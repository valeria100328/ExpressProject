const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();
//BoletaGeneral
const boletaGeneralController = require('../controllers/BoletaGeneralController');
//Cliente
const ClienteController = require('../controllers/clienteController')
//BoletaVIP
const boletaVipController = require('../controllers/boletaVipController');
//EventoRataBlanca
const eventoRataBlancaController = require('../controllers/eventoRataBlancaController');
//Ticket
const ticketController = require('../controllers/ticketController')

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

//BOLETA VIP
router.post('/boletavip', boletaVipController.crearBoletaVip)
router.get('/boletavip', boletaVipController.consultarBoletas);
router.get('/boletavip/:id', boletaVipController.consultarBoleta);
router.put('/boletavip/:id', boletaVipController.actualizarBoleta);
router.delete('/boletavip/:id', boletaVipController.eliminarBoleta);

//EVENTO RATA BLANCA
router.post('/eventoRB', eventoRataBlancaController.crearEventoRB)
router.get('/eventoRB', eventoRataBlancaController.consultarEventosRB);
router.get('/eventoRB/:id', eventoRataBlancaController.consultarEventoRB);
router.put('/eventoRB/:id', eventoRataBlancaController.actualizarEventoRB);
router.delete('/eventoRB/:id', eventoRataBlancaController.eliminarEventoRB);

//Ticket
router.post('/ticket',ticketController.crearTicket);
router.get('/ticket', ticketController.consultarTickets);
router.get('/ticket/:id', ticketController.consultarTicket);
router.put('/ticket/:id', ticketController.actualizarTicket);
router.delete ('/ticket/:id',ticketController.eliminarTicket);


module.exports = router;
