const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consulta = new Schema({
  pid: {
    type: String,
    require: true,
  },
  fid: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
    require: true,
  },
  sintomas: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  },
});
mongoose.model("consulta", consulta);
