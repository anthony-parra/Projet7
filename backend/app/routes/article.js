const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const articleControllers = require ('../controllers/article.js');

//ROUTE POUR LES ARTICLES
  
router.post('/create', articleControllers.create);
router.get('/oneArticle/:articleId', articleControllers.findOne)
router.get('/allArticle', articleControllers.findAll);
router.delete('/:articleId', auth, articleControllers.delete);

module.exports = router;