const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const articleControllers = require ('../controllers/article.js');

//ROUTE POUR LA CRÉATION DES ARTICLES
  
router.post('/create',auth, articleControllers.create);
router.get('/allArticle', articleControllers.findAll);
router.delete('/:articleId', auth, articleControllers.delete);

module.exports = router;