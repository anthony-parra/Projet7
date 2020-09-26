const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentaireControllers = require('../controllers/commentaire');

//ROUTE POUR L'ÉCRITURE DE COMMENTAIRE

router.post('/create', auth, commentaireControllers.create);
router.get('/allCommentaire', auth, commentaireControllers.findAll);

module.exports = router;