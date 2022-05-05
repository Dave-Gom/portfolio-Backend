// const mysql = require("mysql");
const { Sequelize } = require("sequelize");

const url = process.env.APP_URL ? process.env.APP_URL : "localhost/test";
//establecemos los parametros
// const conexion = mysql.createConnection({
//   host: url,
//   user: "root",
//   password: "",
//   database: "dave",
// });

const sequelize = new Sequelize("dave", "root", "", {
  host: url,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const conect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

conect();
// conexion.connect((error) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log("Conexion Exitosa!");
//   }
// });

module.exports = sequelize;
