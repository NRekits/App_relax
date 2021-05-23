const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id_user:{
        type: String,
        required: true,

    },
    id_triunfo:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,

    },
    descripcion: {
        type: String,
        required: true,

    },
    Fecha: {
        type: Date,
        required: true,
     
    }
 
})

module.exports = mongoose.model('Estado', userSchema, 'Estado');