const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Routes = require("./routes/index");

const db = require("./db/connection");
const Itens = require("./models/index");

//bory parser
app.use(bodyParser.json());
app.use(express.json());

app.use("/itens", Routes);

// db connection = conexão cm o banco
db.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com o banco de dados: ", error);
  });

//sinroniza os 'models' com o db
db.sync();

app.listen(1111, () => {
    console.log("Servidor no ar");
  });
  