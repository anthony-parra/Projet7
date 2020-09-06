const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./app/routes/user');
const articleRoutes = require('./app/routes/article');
const commentaireRoutes = require('./app/routes/commentaire');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//NE RIEN MODIFIER AU DESSUS

app.use(bodyParser.json()); //Permet de transformer les requêtes en JSON

app.use('/api/auth', userRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/commentaire', commentaireRoutes);

module.exports = app;