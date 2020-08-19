const mysql = require("mysql");
const config = require("./app/config/config.js");

// Création de la connexion à MySQL
const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
  port: config.PORT
});

// Connection à MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Vous êtes connecté à la BDD !");
});

module.exports = connection;