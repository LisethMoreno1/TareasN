const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

//create rutas

router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all user
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error }));
  
});


// get a user

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Actualizar  user

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, estado, tarea, descripcion } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, estado, tarea, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Eliminar  user

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
