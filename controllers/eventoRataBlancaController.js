const EventoRataBlanca = require('../models/EventoRataBlanca');

//Post
exports.crearEventoRB = async(req , res) => {
  // console.log('creando la boletaVIP desde el controlador...');
  // console.log(req.body)
    try {
      let data_eventoRB;
      data_eventoRB = new EventoRataBlanca(req.body);
      await data_eventoRB.save();
      res.send(data_eventoRB)

  }catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }

}

//GET
exports.consultarEventosRB = async(req, res) => {
  try {
      const data_eventoRB = await EventoRataBlanca.find();
      res.json(data_eventoRB);
  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//Get by id
exports.consultarEventoRB= async(req, res) => {
  try {
      const data_eventoRB = await EventoRataBlanca.findById(req.params.id);

      if (!data_eventoRB) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias' })
      }
      res.json(data_eventoRB);

  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//PUT
exports.actualizarEventoRB = async(req, res) => {
  try {
      const { Nombre_evento, Lugar, Fecha, Hora, Descripcion } = req.body
      let data_eventoRB = await EventoRataBlanca.findById(req.params.id);

      if (!data_eventoRB) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
      }

      data_eventoRB.Nombre_evento = Nombre_evento;
      data_eventoRB.Lugar = Lugar;
      data_eventoRB.Fecha = Fecha;
      data_eventoRB.Hora = Hora;
      data_eventoRB.Descripcion = Descripcion;

      data_eventoRB = await EventoRataBlanca.findOneAndUpdate({ _id: req.params.id }, data_eventoRB, { new: true })
      res.json(data_eventoRB);

  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//Delete
exports.eliminarEventoRB = async(req, res) => {
  try {
      const data_boletaVip = await EventoRataBlanca.findById(req.params.id);
      if (!data_boletaVip) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar boleta' })
      }
      await EventoRataBlanca.findByIdAndRemove({ _id: req.params.id });
      res.json({ mensaje: 'Evento eliminado correctamente' });
  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}