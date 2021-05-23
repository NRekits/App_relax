const router = require('express').Router();
const Estado =require('../models/Estado')



router.post('/añadir', async (req, res) => {
    try{   
  

        const estado = new Estado({
            id_user:req.body.id_user,
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            fecha: req.body.fecha
         
        });

        const savedEstado = await estado.save();
        res.json({
            error: null,
            data: savedEstado
        });

    } catch (error) {
        res.status(400).json({error})
    }
})


router.get('/Estadopordía/id:/mes:', async (req, res) => {
    const id= req.params.id
    const mes= req.params.mes
    try {
       

    }catch(e){
        return status(400).json({error: "Hubo un error en el login, por favor intenta de nuevo"})
    }



})
module.exports = router;