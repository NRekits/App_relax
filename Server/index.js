const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb://localhost:27017/Relax`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))
// import routes
const authRoutes = require('./Routes/auth.js')
const dashboadRoutes = require('./Routes/dashboard');
const verifyToken = require('./Routes/validate-token');

// route middlewares
app.use('/user',authRoutes);
app.use('/dashboard', verifyToken, dashboadRoutes);

// iniciar server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
});


/*const express = require('express');
const mongoose = require('mongoose')
const bodyParser= require('body-parser');

const app = express();
const port =3000;

mongoose.connect('mongodb://localhost:27017/Relax', {useNewUrlParser:true, useUnifiedTopology:true});

const conexion = mongoose.connection;
conexion.once('open',()=>{
  console.log('conexion exitosa');
});
conexion.once('error',(err)=>{
  console.log('Fallo' , err.message);
});


const Usuario= mongoose.model('User', {nombre: String, 
  apellido: String,
  email:String,
  contrasena:String
 }, 'User');

app.get('/', (req,res)=>{
  Usuario.find()
  .then(doc=>{
    res.json({data:doc})
  })
  .catch(err=>{
    console.log(err.message);
  });


});


app.listen(port, function() {
  console.log('Servidor web escuchando en el puerto 3000');
});*/