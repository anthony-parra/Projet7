module.exports = app => {

    // ROUTE USER !!
    const userControllers = require("../controllers/user.js");
    const auth = require('../middleware/auth');
    
    app.post("/signup", userControllers.signup);
    app.post("/login", userControllers.login);
    app.delete("/user/:userId", auth, userControllers.delete);

    // ROUTE CRÉATION ARTICLE !!
    const articleControllers = require ('../controllers/article.js');
    const multer = require('../middleware/multer-config');
  
  
    app.post("/create",auth ,articleControllers.create);
    app.delete("/article/:articleId",auth ,articleControllers.delete);

    // ROUTE CRÉATION DES GIFS !!
    const gifControllers = require('../controllers/gif.js');
    
    app.post("/createGif",auth, multer, gifControllers.createGif);
    app.delete("/deleteGif/:gifId",auth, gifControllers.deleteGif);

  }