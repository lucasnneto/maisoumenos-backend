//Importações necessarias
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("../models/users");
const users = mongoose.model("users");

//Conexão com banco de dados
mongoose.connect(
  "mongodb+srv://geral:geral@c.hcsol.mongodb.net/maisoumenos?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//criando instancia do express
const app = express();
//Permitindo uso de json
app.use(express.json());
//Configurando Cors no express
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

//Definição de porta
const porta = 3000;

//direciona ao index
app.get("/", (req, res) => {
  res.send("Acesse: .../api/");
});

//retorna todo o array
app.get("/api", (req, res) => {
  // a document instance
  users
    .find()
    .then((data) => {
      console.log("getAll >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});

//retorna o array na posição id
app.get("/api/:id", (req, res) => {
  users
    .find({ _id: req.params.id })
    .then((doc) => {
      console.log("getbyId >>>");
      console.log(doc);
      res.send(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(" 404 - Usuario não encontrado");
    });
});

//adiciona ao array
app.post("/api", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.name) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      nome: req.body.name,
      tipo: req.body.type,
    };

    // a document instance
    var novo = new users(a);

    // save model to database
    novo
      .save()
      .then((res) => {
        console.log("OK!");
      })
      .catch((err) => {
        console.log("ERRO");
      });
    return res.send(novo);
  } catch (err) {
    res.send(err);
    return res.status(400);
  }
});

app.put("/api/:id", (req, res) => {
  console.log("PUT >>>>");
  users
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.nome = req.body.name;
      reso.tipo = req.body.type;
      reso
        .save()
        .then((reso) => {
          console.log("Salvo");
          return res.send(reso);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  //update
});

app.delete("/api/:id", (req, res) => {
  console.log("DELETE >>>>");
  users
    .deleteOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);
      return res.send(reso);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Ouve a porta...
app.listen(process.env.PORT || porta, () => {
  console.log("Listen port.....");
});
