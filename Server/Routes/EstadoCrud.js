const router = require('express').Router();
const Estado = require('../models/Estado')



router.post('/insertar', async (req, res) => {
   
        const estado =  new Estado({
            iduser:req.body.iduser,
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            fecha: req.body.fecha
         
        });

        await estado.save()
        .then(doc=>{
            console.log('dato insertado',doc)
            res.json({response:'exito'})
        })
        .catch(err => {
            console.log("error al insertar", err.message)
        })
<<<<<<< Updated upstream

    })
router.get('/Estadopormes/id:/fecha:', (req, res) => {
    const id= req.params.id
    const fecha= req.params.fecha
  
=======
})

router.get('/Estadopormes/id:/mes:', (req, res) => {
    const id = req.params.id
    const mes = req.params.mes
    try {


    } catch (e) {
        return status(400).json({ error: "Hubo un error en el login, por favor intenta de nuevo" })
    }
>>>>>>> Stashed changes



})
module.exports = router; 