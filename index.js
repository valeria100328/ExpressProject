const express = require ('express')
const conectar_DataBase = require('./config/database')
const cors = require('cors')
//Va a guardar todas las funcionalidades de app en express
const app = express();
conectar_DataBase();
app.use(cors());

app.use(express.json());


/*app.get('/',(req,res) => {
    res.send('Mi aplicación con Express')
})*/
app.use('/api/boletaGeneral', require('./routes/boletaGeneral'));


app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en el puerto 3000')
})