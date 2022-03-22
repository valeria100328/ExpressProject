//Base de datos/moongose/conexion a nuestra base de datos
const mongoose = require('mongoose');

//acceder las credenciales de mi proyecto
require('dotenv').config({ path: 'config.env' });

//Conexion a mi base de datos
const conectar_DataBase = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            //Configuración
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // eslint-disable-next-line no-console
        console.log('Base de datos conectada')
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        process.exit(1);
    }
}

//Exportamos nuestro module
module.exports =  conectar_DataBase
