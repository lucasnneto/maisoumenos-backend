const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funcionario = new Schema({
  hid: {
    type: String,
    require: true,
  },
  mid: {
    type: String,
    require: true,
  },

});
mongoose.model("funcionario", funcionario);