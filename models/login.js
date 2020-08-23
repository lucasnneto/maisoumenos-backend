const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema({
  usuario: {
    type: String,
    require: true,
  },
  senha: {
    type: String,
    require: true,
  },
  tipo: {
    type: Boolean,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
});
mongoose.model("login", login);
