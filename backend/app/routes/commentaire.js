const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentaireControllers = require('../controllers/commentaire');

//ROUTE POUR L'ÉCRITURE DE COMMENTAIRE

router.post('/create', commentaireControllers.create);
router.get('/allCommentaire', commentaireControllers.findAll);

module.exports = router;