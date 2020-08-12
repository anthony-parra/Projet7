const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');



// Connexion à la BDD MySQL
console.log('Connexion en cours, veuillez patienter...');

let connectionMysql = mysql.createConnection({
    database: 'Groupomania',
    host: "localhost",
    port: '8889',
    user: "root",
    password: "root"
});

connectionMysql.connect(function(error) {
    if (error)
        console.log('Je crois que nous avons une erreur' + error)
    else
        console.log("Vous êtes maintenant connecté !");
});


const app = express();
app.use(bodyParser.json());

module.exports = app;