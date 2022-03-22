const res = require('express/lib/response');
const { request } = require('https');
const Ticket = require('../models/Ticket');

exports.crearTicket = async (req, res) => {
    //console.log('creando el ticket desde el controlador')
    //console.log(req.body);
    try {

        let data_ticket;
        data_ticket = new Ticket(req.body);
        await data_ticket.save();
        res.send(data_ticket);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. hay un error')
    }
}

exports.consultarTickets = async (req, res) => {
    try {
        const data_ticket = await Ticket.find();
        res.json(data_ticket);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. hay un error')
    }
}

exports.consultarTicket = async (req, res) => {
    try {
        const data_ticket = await Ticket.findById(req.params.id);
        console.log(data_ticket)
        

        if (!data_ticket) {
            res.status(404).json({ msg: 'No se encontraron coincidencias' })
        }
        res.json(data_ticket);
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. hay un error')
    }
}

exports.actualizarTicket = async(req, res) =>{
    try {
        const {nombre_evento, fecha, hora, lugar, cantidad_ticket, total, estado_pago} = req.body
        let data_ticket = await Ticket.findById(req.params.id);
        if (!data_ticket) {
            res.status(404).json({ msg: 'No se encontraron coincidencias para actualizar' })
        }
        res.json(data_ticket);


        data_ticket.nombre_evento = nombre_evento;
        data_ticket.fecha = fecha;
        data_ticket.hora =hora;
        data_ticket.lugar = lugar;
        data_ticket.cantidad_ticket =cantidad_ticket;
        data_ticket.total =total;
        data_ticket.estado_pago= estado_pago;

        data_ticket =await Ticket.findOneAndUpdate({_id: req.params.id}, data_ticket, {new:true})
        res.json(data_ticket);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. hay un error');
    }
}

exports.eliminarTicket = async (req,res) => {
    try {
        const data_ticket =await Ticket.findById(req.params.id);
        if (!data_ticket) {
            res.status(404).json({ msg: 'No se encontraron coincidencias para eliminar' })   
        }
        res.json(data_ticket);
        
        await Ticket.findByIdAndRemove({_id: req.params.id});
        res.json({mensaje: 'Ticket eliminado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. hay un error');
    }

}

