const express = require ('express')
const router = express.Router()
//Vaya el models y reconozca ese paquete
const {User} = require('../models/user')

//Creacion de un usuario
router.post('/', async(req, res) => {
//Operacion asincrona en la que el findOne busca en la base de datos o si existen esos campos
    let user = await User.findOne({email: req.body.email})
    //Si lo encuenta ya que pueden estar los mismos usuarios ya existentes
    if(user) return res.status(400).send('Ese usuario ya existe')
    //Si no existe pasara lo siguiente y crearemos esos usuarios
    //Lo que nos llega el req por el body
    //Nuestro modelo esquema con cada uno de los paramtros en la que son datos enviados en el cuerpo de la solicitud.
    user = new User({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    })
    //Creamos una constante asincrona para que nos guarde ese usuario en la base de datos
    const result = await user.save()
    //Esta en nuestro modelo user que nos va a generar el token para autenticar si ese es el usuario
    const jwtToken = user.generateJWT()
    res.status(200).send({jwtToken})
})
module.exports = router