const router = require('express').Router();
const Triunfo = require('../models/Triunfo')



router.post('/insertar', (req, res) => {

    const triunfo = new Triunfo({
        iduser: req.body.iduser,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha

    });

    triunfo.save()
        .then(doc => {
            console.log('dato insertado', doc)
            res.json({ response: 'exito' })
        })
        .catch(err => {
            console.log("error al insertar", err.message)
        })


})

//Mostrar todos los estados de un usuario después de una fecha especifica
//Para mostrar en el calendario
router.get("/Triunfo/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    Triunfo.find({ _id: id })
        .then((doc) => {
            res.json({ data: doc });
        })
        .catch((err) => {
            console.log("error", err.message);
        });
});


//Triunfos del usuario por día
router.get('/Triunfospordia/:iduser/:fecha', (req, res) => {

    const fecha = req.params.fecha
    const iduser = req.params.iduser
    const li = new Date(fecha);
    const ls = new Date(fecha);
    ls.setHours(ls.getHours() + 24);

    Triunfo.find({ iduser: iduser, fecha: { $gte: li, $lt: ls } })
        .then(doc => {
            res.json({ data: doc });
        })
        .catch(err => {
            console.log("error", err.message)
        })

});

//Modificar triunfo del dia
router.post('/ModificarTriunfodeldia', (req, res) => {

    Estado.findByIdAndUpdate({ _id: id }, {
        $set: {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        }
    })
        .then(doc => {
            res.json({ data: doc });
        })
        .catch(err => {
            console.log("error", err.message)
        })

});
module.exports = router;