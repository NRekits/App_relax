const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id_user:{
        type: String,
        required: true,

    },
    nombre: {
        type: String,
        required: true,

    },
    descripcion: {
        type: String,
        required: true,

    },
    fecha: {
       type: Date,
        required: true,
     
    }
 
})

module.exports = mongoose.model('Estado', userSchema, 'Estado');