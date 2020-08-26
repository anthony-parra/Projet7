const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const articleControllers = require ('../controllers/article.js');
  
router.post("/create",auth ,articleControllers.create);
router.delete("/article/:articleId",auth ,articleControllers.delete);

module.exports = router;
