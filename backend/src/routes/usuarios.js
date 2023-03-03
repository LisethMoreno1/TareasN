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

//get Ususario
Router.get("/usuarios/:id", (req, res) => {
  usuariosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  //Patch para loguear a usuario
Router.patch("/usuarios", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(404)
      .json({ message: "Se requiere Usuario y Contraseña para Ingresar" });
  try {
    const usuarios = await usuariosSchema.findOne({
      username: username,
    });
    if (!usuarios)
      return res
        .status(404)
        .json({ message: "Usuario No Registrado", usuarios: null });

    if (password !== usuarios.password)
      return res
        .status(401)
        .json({ message: "Contraseña o Usuario Incorrecta" });

    const token = jwt.sign(
      {
        usuarios,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: 60 * 60,
      }
    );
    res.json({ usuarios, message: "Registrado", token });
  } catch (error) {
    res.status(500).json({ message: "error hablar  con admin" });
  }
});


module.exports = Router;

