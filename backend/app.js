const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./app/routes/user');
const articleRoutes = require('./app/routes/article');

const app = express();

//NE RIEN MODIFIER AU DESSUS

app.use(bodyParser.json()); //Permet de transformer les requêtes en JSON

app.use('/api/auth', userRoutes);
app.use('/api/article', articleRoutes);

module.exports = app;