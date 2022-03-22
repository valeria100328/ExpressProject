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


<<<<<<< HEAD

=======
/*app.get('/',(req,res) => {
    res.send('Mi aplicación con Express')
})*/
app.use('/api/boletaGeneral', require('./routes/boletaGeneral'));
app.use('/api/ticket',require('./routes/ticket'));
>>>>>>> 9415241596876502173bd72f6ecd38584e0fadc2

app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en el puerto 3000')
})