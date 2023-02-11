const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
/*   name: {
    type: "string",
    required: true,
  }, */
  tarea: {
    type: "string",
    required: true,
  },
  descripcion: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model('User',userSchema)