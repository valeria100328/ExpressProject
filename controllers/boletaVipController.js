const BoletaVIP = require('../models/BoletaVIP');

//Post
exports.crearBoleta = async(req , res) => {
  // console.log('creando la boletaVIP desde el controlador...');
  // console.log(req.body)
    try {
      let data_boletaVip;
      data_boletaVip = new BoletaVIP(req.body);
      await data_boletaVip.save();
      res.send(data_boletaVip)

  }catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }

}

//GET
exports.consultarBoletas = async(req, res) => {
  try {
      const data_boletaVip = await BoletaVIP.find();
      res.json(data_boletaVip);
  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//Get by id
exports.consultarBoleta = async(req, res) => {
  try {
      const data_boletaVip = await BoletaVIP.findById(req.params.id);

      if (!data_boletaVip) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias' })
      }
      res.json(data_boletaVip);

  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//PUT
exports.actualizarBoleta = async(req, res) => {
  try {
      const { precio, servicio, seccion, cantidad_unidad } = req.body
      let data_boletaVip = await BoletaVIP.findById(req.params.id);

      if (!data_boletaVip) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
      }

      data_boletaVip.precio = precio;
      data_boletaVip.servicio = servicio;
      data_boletaVip.seccion = seccion;
      data_boletaVip.cantidad_unidad = cantidad_unidad;

      data_boletaVip = await BoletaVIP.findOneAndUpdate({ _id: req.params.id }, data_boletaVip, { new: true })
      res.json(data_boletaVip);

  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}

//Delete
exports.eliminarBoleta = async(req, res) => {
  try {
      const data_boletaVip = await BoletaVIP.findById(req.params.id);
      if (!data_boletaVip) {
          res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar boleta' })
      }
      await BoletaVIP.findByIdAndRemove({ _id: req.params.id });
      res.json({ mensaje: 'Boleta eliminada correctamente' });
  } catch (error) {
      console.log(error);
      res.status(500).send('Ups... Hay un error, comuniquese con soporte');
  }
}