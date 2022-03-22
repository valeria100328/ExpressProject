//Servicio de nuestro proyecto
const Cliente = require('../models/Cliente')

//Metodo post-para guardar y crear
//Utilizaremos funciones 
exports.createClient= async(req, res) => {
    //console.log('Creando el producto desde el controlador');
    console.log(req.body);
    try {
        let data_cliente;
        data_cliente =  new  Cliente(req.body);
        //Guardar la informacion y registrela
        await data_cliente.save();
        //Enviar un message y mostrar la info
        res.send(data_cliente)

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//Metodo get-consultar
exports.consultClient = async(req, res) => {
    try {
        //modelo valida y consulta la nfo
        const data_cliente = await Cliente.find();
        res.json(data_cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//metodo get-bandera/id
exports.consultsClient = async(req, res) => {
    try {
        //Buscara el id por el metodo bandera :id
        const data_cliente =  await Cliente.findById(req.params.id);
        //! significa que es false
        if (!data_cliente) {
            res.status(404).json({message: 'No se encontro el cliente requerido'})

        }
        res.json(data_cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
        
    }
}
//Metodo put actualizar o editar
exports.updateClient  = async(req, res) => {
    try {
        const { nombres, apellidos, telefono, email} = req.body
        let data_cliente = await Cliente.findById(req.params.id);
    //! significa que es falso
        if (!data_cliente) {
            res.status(404).json({ message: 'No se encontró coincidencias para la actualización del cliente que quiere modificar' })
        }

        data_cliente.nombres = nombres;
        data_cliente.pellidos = apellidos;
        data_cliente.telefono= telefono;
        data_cliente.email = email;

        data_cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, data_cliente, { new: true })
        res.json(data_cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}

//METODO DELETE
exports.deleteClient = async(req, res) => {
    try {
        const data_cliente = await Cliente.findById(req.params.id);
        //dato false
        if (!data_cliente) {
            res.status(404).json({ message: 'No se encontró coincidencias para eliminar el cliente' })
        }
        await Cliente.findByIdAndRemove({ _id: req.params.id });
        res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}