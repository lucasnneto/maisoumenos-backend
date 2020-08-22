const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paciente = new Schema({
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
});
mongoose.model("paciente", paciente);
