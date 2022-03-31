const mongoose = require('mongoose')

const boletaVIPSchema = mongoose.Schema({

  precio: {
      type: Number,
      require: true
  },
  servicio: {
      type: Number,
      require: true
  },
  seccion: {
      type: String,
      required: true
  },
  cantidad_unidad: {
      type: Number,
      required: true
  },
  fec_cre: {
      type: Date,
      default: Date.now()
  }
})

module.exports = mongoose.model('boletavip', boletaVIPSchema);
