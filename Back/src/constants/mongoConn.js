const mongoose = require ("mongoose")
const connectionString = require("./connectionData")

mongoose.connect(connectionString)
.then(() => {
    console.log('Conexion a la Base de Datos Establecida')
})
.catch(err => {
    console.log(err)
})