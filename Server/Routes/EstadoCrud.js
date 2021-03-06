const router = require("express").Router();
const Estado = require("../models/Estado");

//Insertar
router.post("/insertar", async (req, res) => {
  const estado = new Estado({
    iduser: req.body.iduser,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
  });

  await estado
    .save()
    .then((doc) => {
      console.log("dato insertado", doc);
      res.json({ response: "exito" });
    })
    .catch((err) => {
      console.log("error al insertar", err.message);
    });
});
router.get("/Estadospormes/:id/:fecha", (req, res) => {
  const id = req.params.id;
  const fecha = new Date(req.params.fecha);
  console.log(id);

  Estado.find({ iduser: id, fecha: { $gte: fecha } })
    .then((doc) => {
      res.json({ data: doc });
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

//Mostrar todos los estados de un usuario después de una fecha especifica
//Para mostrar en el calendario
router.get("/Estado/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Estado.find({ _id: id })
    .then((doc) => {
      res.json({ data: doc });
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

//Estado del usuario por día
router.get("/Estadopordia/:iduser/:fecha", (req, res) => {
  const fecha = req.params.fecha;
  const iduser = req.params.iduser;
  const li = new Date(fecha);
  const ls = new Date(fecha);
  console.log(iduser);
  ls.setHours(ls.getHours()+24);

  console.log(li);
  console.log(ls);

  Estado.find({ iduser: iduser, fecha: {$gte: li, $lt: ls}})
    .then((doc) => {
      res.json({ data: doc });
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

//Modificar estado del dia
router.post("/ModificarEstadodeldia", (req, res) => {
  const id = req.body.id;
  console.log(id);
  console.log(req.body.nombre);
  console.log(req.body.descripcion);

  Estado.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
      },
    }
  )
    .then((doc) => {
      res.json({ data: doc });
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

module.exports = router;
