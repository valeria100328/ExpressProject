const mongoose = require('mongoose')

const ClienteSchema = mongoose.Schema({

    nombres: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    email:{
        type:String,
        require: true
    },

    fec_cre:{
        type: Date,
        //llenar automaticamente
        default: Date.now()
    }
});
module.exports = mongoose.model('cliente', ClienteSchema )