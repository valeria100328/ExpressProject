//libreria de moongose base de datos guardian de nuestra base de datos
const mongoose = require('mongoose')

const BoletaGeneralSchema = mongoose.Schema({

    precio: {
        type: Number,
        require: true
    },
    seccion: {
        type: String,
        require: true
    },
    servicio: {
        type: Number,
        require: true
    },
    cantidad_unidad:{
        type:Number
    },

    fec_cre:{
        type: Date,
        //llenar automaticamente
        default: Date.now()
    }
});
module.exports = mongoose.model('BoletaGeneral', BoletaGeneralSchema )

