const express = require('express');
const router =express.Router();
const ticketController = require('../controllers/ticketController')


router.post('/',ticketController.crearTicket);
router.get('/', ticketController.consultarTickets);
router.get('/:id', ticketController.consultarTicket);
router.put('/:id', ticketController.actualizarTicket);
router.delete ('/:id',ticketController.eliminarTicket);

module.exports = router;
