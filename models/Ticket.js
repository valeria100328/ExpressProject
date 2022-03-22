const mongoose = require('mongoose');

const ticketsSchema = mongoose.Schema({ 


nombre_evento:{
    type:String,
    require: true
},


fecha:{
    type:String,
    require: true
},

hora:{
    type:String,
    require: true
},

lugar:{
    type:String,
    require: true
},

cantidad_ticket:{
    type:Number,
    require: true
},

total:{
    type:Number,
},

estado_pago:{
    type:String,
    require: true
},

fec_cre:{
    type:Date,
    default: Date.now
}

});

module.exports = mongoose.model ('ticket', ticketsSchema)