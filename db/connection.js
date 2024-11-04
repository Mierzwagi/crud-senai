const Sequelize = require("sequelize");

const sequelize = new Sequelize("nome", "root", "root", {
    //Dialetq = qual banco utilizado e onde está
    dialect: "mysql",
  });

module.exports = sequelize;

//npm i sequelize sqlite3