const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require("express-rate-limit");

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

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // Limite à 1000 requête !
});

//NE RIEN MODIFIER AU DESSUS

app.use(bodyParser.json());

app.use(limiter);
app.use(xss());
app.use(helmet());
app.use('/api/auth', userRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/commentaire', commentaireRoutes);

module.exports = app;