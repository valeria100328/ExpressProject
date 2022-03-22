const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();

//Cliente
const ClienteController = require('../controllers/clienteController')
//Cliente
router.post('/cliente', ClienteController.createClient)
router.get('/cliente', ClienteController.consultClient);
router.get('/cliente/:id', ClienteController.consultsClient);
router.put('/cliente/:id', ClienteController.updateClient)
router.delete('/cliente/:id', ClienteController.deleteClient);

//Tema del router
module.exports = router;