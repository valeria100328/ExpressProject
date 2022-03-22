const express = require('express')
const router = express.Router()
const {User} = require ('../models/user')

router.post('/', async(req, res) => {
    //Campo unico que seria email
    const user = await User.findOne({email: req.body.email})
    //Si el usuario no existe
    if(!user) return res.status(400).send('Usario o contraseña son incorrectos')
    //Si existe el usuario pero la contaseña es incorrecta
    if(user.password !== req.body.password) return res.status(400).send('Contraseña incorrecta')

    //Generamos el JWT
    const jwtToken = user.generateJWT()
    //Respondemos al usuario y enviamos el jsonwebtoken
    res.status(200).send({jwtToken})
})

module.exports = router
