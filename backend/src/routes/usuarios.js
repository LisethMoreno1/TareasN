const express = require("express");
const Router = express.Router();
const usuariosSchema = require("../models/usuarios");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

Router.post("/usuarios", (req, res) => {
  const tarea = usuariosSchema(req.body);
  tarea
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all tarea
Router.get("/usuarios/:id", (req, res) => {
  usuariosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

Router.patch("/usuarios", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(404)
      .json({ message: "Se requiere usuario y contraseña para esta peticion" });
  try {
    const usuarios = await usuariosSchema.findOne({
      username: username,
    });
    if (!usuarios)
      return res
        .status(404)
        .json({ message: "Usuario no registrado", usuarios: null });

    if (password !== usuarios.password)
      return res.status(401).json({ message: "contraseña incorrecta" });

    const token = jwt.sign(
      {
        usuarios,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: 60 * 60,
      }
    );
    res.json({ usuarios, message: "signed in", token });
  } catch (error) {
    res.status(500).json({ message: "error hablar  con admin" });
  }
});

// router.get("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   usuariosSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // Actualizar  tarea

// router.put("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, estado, tarea, descripcion } = req.body;
//   usuariosSchema
//     .updateOne({ _id: id }, { $set: { name, estado, tarea, descripcion } })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // Eliminar  tarea

// router.delete("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   usuariosSchema
//     .remove({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // editar estado

// router.put("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   const { estado } = req.body;
//   usuariosSchema
//     .updateOne({ _id: id }, { $set: { estado } })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

module.exports = Router;

