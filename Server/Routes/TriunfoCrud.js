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



//Triunfos del usuario por día
router.get('/Triunfospordia/:iduser/:fecha', (req, res) => {
 
    const fecha= req.params.fecha
    const iduser=req.params.iduser
    
    Estado.find({iduser:iduser,fecha:fecha})
    .then(doc=>{
        res.json({data:doc});
    })
    .catch(err=>{
        console.log("error", err.message)
    })

});

//Modificar triunfo del dia
router.post('/ModificarTriunfodeldia', (req, res) => {
    
    Estado.findByIdAndUpdate({_id:id} ,{$set : { 
        nombre: req.body.nombre,
        descripcion: req.body.descripcion}})
    .then(doc=>{
        res.json({data:doc});
    })
    .catch(err=>{
        console.log("error", err.message)
    })

});
module.exports = router;