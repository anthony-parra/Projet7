const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentaireControllers = require('../controllers/commentaire');

//ROUTE POUR L'ÉCRITURE DE COMMENTAIRE

router.post('/create', commentaireControllers.create);

//ROUTE POUR LA RÉCUPÉRATION D'UN COMMENTAIRE AVEC SON ID

router.get('/allCommentaire', commentaireControllers.findAll);

module.exports = router;