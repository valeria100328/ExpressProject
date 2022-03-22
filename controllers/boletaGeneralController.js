//Servicio de nuestro proyecto
const BoletaGeneral = require('../models/BoletaGeneral');

//Metodo post-para guardar y crear
//Utilizaremos funciones 
exports.createBoletaGeneral = async(req, res) => {
    //console.log('Creando el producto desde el controlador');
    console.log(req.body);
    try {
        let data_BoletaGeneral;
        data_BoletaGeneral =  new  BoletaGeneral(req.body);
        //Guardar la informacion y registrela
        await data_BoletaGeneral.save();
        //Enviar un message y mostrar la info
        res.send(data_BoletaGeneral)

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//Metodo get-consultar
exports.consultBoletaGeneral = async(req, res) => {
    try {
        //modelo valida y consulta la nfo
        const data_BoletaGeneral = await BoletaGeneral.find();
        res.json(data_BoletaGeneral);
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//metodo get-bandera/id
exports.consultsBoletaGeneral = async(req, res) => {
    try {
        //Buscara el id por el metodo bandera :id
        const data_BoletaGeneral =  await BoletaGeneral.findById(req.params.id);
        //! significa que es false
        if (!data_BoletaGeneral) {
            res.status(404).json({message: 'No se encontro la boleta general requerida'})

        }
        res.json(data_BoletaGeneral);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
        
    }
}
//Metodo put actualizar o editar
exports.updateBoletaGeneral  = async(req, res) => {
    try {
        const { precio, seccion, servicio, cantidad_unidad} = req.body
        let data_BoletaGeneral = await BoletaGeneral.findById(req.params.id);
    //! significa que es falso
        if (!data_BoletaGeneral) {
            res.status(404).json({ message: 'No se encontró coincidencias para la actualización de la boleta general que quiere modificar' })
        }

        data_BoletaGeneral.precio = precio;
        data_BoletaGeneral.seccion = seccion;
        data_BoletaGeneral.servicios= servicio;
        data_BoletaGeneral.cantidad_unidad = cantidad_unidad;

        data_BoletaGeneral = await BoletaGeneral.findOneAndUpdate({ _id: req.params.id }, data_BoletaGeneral, { new: true })
        res.json(data_BoletaGeneral);

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}

//METODO DELETE
exports.deleteBoletaGeneral = async(req, res) => {
    try {
        const data_BoletaGeneral = await BoletaGeneral.findById(req.params.id);
        //dato false
        if (!data_BoletaGeneral) {
            res.status(404).json({ message: 'No se encontró coincidencias para eliminar el libro que quiere' })
        }
        await BoletaGeneral.findByIdAndRemove({ _id: req.params.id });
        res.json({ message: 'Boleta general eliminada exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}