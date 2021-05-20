const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Habilitar cors
app.use(cors());
// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public/'));
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


