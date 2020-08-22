const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consulta = new Schema({
  pid: {
    type: String,
    require: true,
  },
  hid: {
    type: String,
    require: true,
  },
  did: {
    type: String,
    require: true,
  },
  horario: {
    type: Date,
    require: true,
  },
  sistomas: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  },
});
mongoose.model("consulta", consulta);
