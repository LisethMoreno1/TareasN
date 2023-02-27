const mongoose = require("mongoose");
const usuario = require("./usuarios");

const Schema = mongoose.Schema;
const tareasSchema = new Schema({
  tarea: String,
  descripcion: String,
  estado: Boolean,
  _idUser: { type: Schema.ObjectId, ref: usuario },
},{timestamps: true,versionKey:false});
module.exports = mongoose.model("Tarea", tareasSchema);
