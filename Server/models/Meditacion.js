const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,

    },
    descripcion: {
        type: String,
        required: true,

    },
    uri: {
       type: String,
        required: true,
     
    }
 
})

module.exports = mongoose.model('Meditacion', userSchema, 'Meditacion');