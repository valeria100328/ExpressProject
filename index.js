const express = require ('express')
const conectar_DataBase = require('./config/database')
const cors = require('cors')

const user = require('./routes/user')
const autenticacion = require('./routes/autenticacion')
//Va a guardar todas las funcionalidades de app en express
const app = express();
conectar_DataBase();
app.use(cors());

//Express recibira un formato json
app.use(express.json());
//Rutas en Potsman
app.use('/api/user/', user)
app.use('/api/autenticacion/', autenticacion)



//app.use('/api/BoletaGeneral', require('./routes/BoletaGeneral'));
app.use('/api', require('./routes/api'));




app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en el puerto 3000')
})