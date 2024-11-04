const Sequelize = require("sequelize");
const db = require("../db/connection");

const Itens = db.define("itensx", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
  quantidade: {
    type: Sequelize.INTEGER,
  },
  descricao: {
    type: Sequelize.STRING,
  },
});

//exportarpara ser utilizado
module.exports = Itens;
