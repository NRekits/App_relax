const router = require('express').Router();
const Estado = require('../models/Estado')



router.post('/insertar', async (req, res) => {

    const estado = new Estado({
        iduser: req.body.iduser,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha

    });

    await estado.save()
        .then(doc => {
            console.log('dato insertado', doc)
            res.json({ response: 'exito' })
        })
        .catch(err => {
            console.log("error al insertar", err.message)
        })

    })
router.get('/Estadospormes/:id/:fecha', (req, res) => {
    const id= req.params.id
    const fecha= req.params.fecha
    
    Estado.find({_id:id,fecha : {"$gt" : fecha}})
    .then(doc=>{
        res.json({data:doc});
    })
    .catch(err=>{
        console.log("error", err.message)
    })

})
module.exports = router;