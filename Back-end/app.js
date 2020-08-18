const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('./config/config');


// Connexion à la BDD MySQL
console.log('Connexion en cours, veuillez patienter...');

let connectionMysql = mysql.createConnection({
    database: config.dataBase,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});

connectionMysql.connect(function(error) {
    if (error)
        console.log('Je crois que nous avons une erreur' + error)
    else
        console.log("Vous êtes maintenant connecté !");
});

//Appliquer le CORS pour travailler sur deux localhost différents

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


const app = express();
app.use(bodyParser.json());

module.exports = app;