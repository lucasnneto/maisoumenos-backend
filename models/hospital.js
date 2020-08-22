const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospital = new Schema({
  medico: {
    type: Array,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  endereco: {
    type: String,
    require: true,
  },
  covid: {
    type: Boolean,
    require: true,
  },
});
mongoose.model("hospital", hospital);
