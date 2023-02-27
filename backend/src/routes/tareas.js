const express = require("express");
const router = express.Router();
const tareaSchema = require("../models/tareas");
const ComprobarToken = require("../middleware/ComprobarToken");
//create rutas

router.post("/tareas",ComprobarToken, (req, res) => {
  const tarea = tareaSchema(req.body);
  tarea._idUser = req.headers._id;
  tarea
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all tarea
router.get("/tareas",ComprobarToken, (req, res) => {
  const {_id}=req.headers;
  tareaSchema
    .find({_idUser : `${_id}`})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error }));
  
});


// get a tarea

router.get("/tareas/:id", (req, res) => {
  const { id } = req.params;
  tareaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Actualizar  tarea

router.put("/tareas/:id", (req, res) => {
  const { id } = req.params;
  const { name, estado, tarea, descripcion } = req.body;
  tareaSchema
    .updateOne({ _id: id }, { $set: { name, estado, tarea, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Eliminar  tarea

router.delete("/tareas/:id", (req, res) => {
  const { id } = req.params;
  tareaSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// editar estado

router.put("/tareas/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  tareaSchema
    .updateOne({ _id: id }, { $set: {  estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;









