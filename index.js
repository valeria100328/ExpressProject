const express = require ('express')
//llamar el codigo de la conexion a la db
const conectar_DataBase = require('./config/database')
const cors = require('cors')
//Va a guardar todas las funcionalidades de app en express
const app = express();
conectar_DataBase();
app.use(cors());

app.use(express.json());


app.use('/api', require('./routes/api'));


app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('El servidor se esta ejecutando en el puerto 3000')
})
