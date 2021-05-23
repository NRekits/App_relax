const router = require('express').Router();
const Triunfo =require('../models/Triunfo')



router.post('/insertar', (req, res) => {
   
        const triunfo = new Triunfo({
            iduser:req.body.iduser,
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            fecha: req.body.fecha
         
        });

        triunfo.save()
        .then(doc=>{
            console.log('dato insertado',doc)
            res.json({response:'exito'})
        })
        .catch (err=>{
            console.log("error al insertar", err.message)
        }) 

    
        })


router.get('/Estadopormes/id:/mes:', (req, res) => {
    const id= req.params.id
    const mes= req.params.mes
    try {
       

    }catch(e){
        return status(400).json({error: "Hubo un error en el login, por favor intenta de nuevo"})
    }



})
module.exports = router;