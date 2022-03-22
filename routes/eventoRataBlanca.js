const express = require('express')
const router = express.Router();
const eventoRataBlancaController = require('../controllers/eventoRataBlancaController')

router.post('/', eventoRataBlancaController.crearEventoRB)
router.get('/', eventoRataBlancaController.consultarEventosRB);
router.get('/:id', eventoRataBlancaController.consultarEventoRB);
router.put('/:id', eventoRataBlancaController.actualizarEventoRB);
router.delete('/:id', eventoRataBlancaController.eliminarEventoRB);

module.exports = router;
