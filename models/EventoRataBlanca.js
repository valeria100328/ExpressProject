const mongoose = require('mongoose')

const eventoRataBlancaSchema = mongoose.Schema({
  Nombre_evento: {
      type: String,
      default: "RATA BLANCA"
  },
  Lugar: {
      type: String,
      default: "Manizales"
  },
  Fecha: {
      type: String,
      default: "Marzo 18 de 2022"
  },
  Hora: {
      type: String,
      required: "20:00Hrs"
  },
  Descripcion: {
    type: String,
    default: "Rata Blanca Sur America Tour 2022"
  },
  fec_cre: {
      type: Date,
      default: Date.now()
  }
})

module.exports = mongoose.model('eventoRataBlanca', eventoRataBlancaSchema );