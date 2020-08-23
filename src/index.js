//Importações necessarias
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("../models/consulta");
require("../models/hospital");
require("../models/medico");
require("../models/paciente");
require("../models/funcionario");
require("../models/login");

const consulta = mongoose.model("consulta");
const hospital = mongoose.model("hospital");
const medico = mongoose.model("medico");
const paciente = mongoose.model("paciente");
const funcionario = mongoose.model("funcionario");
const login = mongoose.model("login");

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

//retorna todo o array
app.get("/api", (req, res) => {
  // a document instance
  hospital
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

//
// GET ALL
//

app.get("/api/consulta", (req, res) => {
  // a document instance
  consulta
    .find()
    .then((data) => {
      console.log("getAll consulta >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
app.get("/api/hospital", (req, res) => {
  // a document instance
  hospital
    .find()
    .then((data) => {
      console.log("getAll hospital >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
app.get("/api/medico", (req, res) => {
  // a document instance
  medico
    .find()
    .then((data) => {
      console.log("getAll medico >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
app.get("/api/paciente", (req, res) => {
  // a document instance
  paciente
    .find()
    .then((data) => {
      console.log("getAll paciente >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
app.get("/api/funcionario", (req, res) => {
  // a document instance
  funcionario
    .find()
    .then((data) => {
      console.log("getAll funcionario >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
app.get("/api/login", (req, res) => {
  // a document instance
  login
    .find()
    .then((data) => {
      console.log("getAll funcionario >>>");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Não foi encontrado nada!!");
    });
});
//
// GET BY ID
//

//retorna o array na posição id
app.get("/api/consulta/:id", (req, res) => {
  consulta
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
app.get("/api/hospital/:id", (req, res) => {
  hospital
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
app.get("/api/medico/:id", (req, res) => {
  medico
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
app.get("/api/paciente/:id", (req, res) => {
  paciente
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
app.get("/api/funcionario/:id", (req, res) => {
  funcionario
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
app.get("/api/login/:id", (req, res) => {
  login
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
app.get("/api/hospital/:id/pacientes", (req, res) => {
  funcionario.find({ _hid: req.param.id }).then((fun) => {
    console.log("asdasd", fun);
    consulta
      .find({
        fid: {
          $in: fun.map((f) => f._id),
        },
      })
      .then((cons) => {
        console.log("asdasd", cons);
        paciente
          .find({
            _id: {
              $in: cons.map((c) => c.pid),
            },
          })
          .then((pac) => {
            console.log("asdasd", pac);
            res.send(pac);
          });
      });
  });
});

app.get("/api/hospital/:id/consultas", (req, res) => {
  funcionario.find({ _hid: req.param.id }).then((fun) => {
    console.log("asdasd", fun);
    consulta
      .find({
        fid: {
          $in: fun.map((c) => c._id),
        },
      })
      .then((pac) => {
        console.log("asdasd", pac);
        res.send(pac);
      });
  });
});
app.get("/api/funcionario/:id/medicos", (req, res) => {
  funcionario.find({ _id: req.params.id }).then((fun) => {
    console.log("asdasd", fun);
    medico
      .find({
        _id: {
          $in: fun.map((c) => c.mid),
        },
      })
      .then((pac) => {
        console.log("asdasd", pac);
        res.send(pac);
      });
  });
});

app.get("/api/hospital/:id/medicos", (req, res) => {
  funcionario.find({ _hid: req.param.id }).then((fun) => {
    console.log("asdasd", fun);
    medico
      .find({
        _id: {
          $in: fun.map((c) => c.mid),
        },
      })
      .then((pac) => {
        console.log("asdasd", pac);
        res.send(pac);
      });
  });
});
app.get("/api/funcionario/:id/medicos",(req,res) => {

  var k = req.params.id;

  console.log(k);
  funcionario
  .find({_id:k})
  .then((fun)=>{
    console.log("asdasd",fun)
         medico
            .find(
              {
                _id:{
                  $in:fun.map(c=>c.mid)
                }
              }
            )
            .then((pac)=>{
              console.log("asdasd",pac)
              res.send(pac);
            });
      
      });
});
//
// POST
//

//adiciona ao array
app.post("/api/consulta", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.pid) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      pid: req.body.pid,
      fid: req.body.fid,
      time: Date(req.body.time),
      sintomas: req.body.sintomas,
      valor: req.body.valor,
    };

    // a document instance
    var novo = new consulta(a);

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
app.post("/api/hospital", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.nome) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      lat: req.body.lat,
      lng: req.body.lng,
      covid: req.body.covid,
    };

    // a document instance
    var novo = new hospital(a);

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
app.post("/api/medico", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.nome) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      nome: req.body.nome,
      area: req.body.area,
    };

    // a document instance
    var novo = new medico(a);

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
app.post("/api/paciente", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.nome) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      nome: req.body.nome,
      cpf: req.body.cpf,
    };

    // a document instance
    var novo = new paciente(a);

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
app.post("/api/funcionario", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.mid) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      hid: req.body.hid,
      mid: req.body.mid,
    };

    // a document instance
    var novo = new funcionario(a);

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
app.post("/api/login", async (req, res) => {
  console.log("POST >>>>");
  if (!req.body.usuario) {
    res.status(400).send("Invalido");
    return;
  }
  try {
    // compile schema to model

    const a = {
      usuario: req.body.usuario,
      senha: req.body.senha,
      id: req.body.id,
      tipo: req.body.tipo,
    };

    // a document instance
    var novo = new login(a);

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

//
// PUT
//

app.put("/api/paciente/:id", (req, res) => {
  console.log("PUT >>>>");
  paciente
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.nome = req.body.nome;
      reso.cpf = req.body.cpf;
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
app.put("/api/consulta/:id", (req, res) => {
  console.log("PUT >>>>");
  consulta
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.pid = req.body.pid;
      reso.fid = req.body.fid;
      reso.time = Date(req.body.time),
      reso.sintomas = req.body.sintomas;
      reso.valor = req.body.valor;

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

app.put("/api/hospital/:id", (req, res) => {
  console.log("PUT >>>>");
  hospital
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.nome = req.body.nome;
      reso.endereco = req.body.endereco;
      reso.covid = req.body.covid;
      reso.lat = req.body.lat;
      reso.lng = req.body.lng;
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

app.put("/api/medico/:id", (req, res) => {
  console.log("PUT >>>>");
  medico
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.nome = req.body.nome;
      reso.area = req.body.area;
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

app.put("/api/funcionario/:id", (req, res) => {
  console.log("PUT >>>>");
  funcionario
    .findOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);

      reso.hid = req.body.hid;
      reso.mid = req.body.mid;
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

//
// DELETE
//

app.delete("/api/paciente/:id", (req, res) => {
  console.log("DELETE >>>>");
  paciente
    .deleteOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);
      return res.send(reso);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/api/hospital/:id", (req, res) => {
  console.log("DELETE >>>>");
  hospital
    .deleteOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);
      return res.send(reso);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/api/medico/:id", (req, res) => {
  console.log("DELETE >>>>");
  medico
    .deleteOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);
      return res.send(reso);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/api/paciente/:id", (req, res) => {
  console.log("DELETE >>>>");
  paciente
    .deleteOne({ _id: req.params.id })
    .then((reso) => {
      console.log(reso);
      return res.send(reso);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/api/funcionario/:id", (req, res) => {
  console.log("DELETE >>>>");
  funcionario
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
