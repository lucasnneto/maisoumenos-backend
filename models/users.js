const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  nome: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
});
mongoose.model("users", users);
