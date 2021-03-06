const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospital = new Schema({
  nome: {
    type: String,
    require: true,
  },
  endereco: {
    type: String,
    require: true,
  },
  lat: {
    type: Number,
    require: true,
  },
  lng: {
    type: Number,
    require: true,
  },
  covid: {
    type: Boolean,
    require: true,
  },

});
mongoose.model("hospital", hospital);
