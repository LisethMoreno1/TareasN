const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
 
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
