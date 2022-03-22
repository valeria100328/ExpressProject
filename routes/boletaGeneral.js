const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();


router.post('/', () => {
    console.log('Creando Boleta')
})

router.post('/:id', () => {
    console.log('Actualizando la Boleta')
})

router.get('/', () => {
    console.log('La boleta es tal')
})


//Tema del router
module.exports = router;
