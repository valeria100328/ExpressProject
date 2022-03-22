const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//Declaramos nuestra constante user
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    password: {
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
})
//Para generar nuestro JSON WEB TOKEN por medio de una funcion
userSchema.methods.generateJWT = function(){
    return jwt.sign({
        //siempre va a sociarse con un id desde potsman
        _id: this._id,
        name:this.name,
        email:this.email
        //Palabra clave para utilizar cuando nos llegue el JSON WEB TOKEN y LO QUEREMOS PASAR A LOS DATOS QUE NOS ESTAN ENVIANDO que es nuestra clave de encriptacion 
    }, "secretKey")
}

const User = mongoose.model ('user', userSchema);
module.exports.User = User
module.exports.userSchema = userSchema