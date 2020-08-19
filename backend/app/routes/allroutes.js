module.exports = app => {

    // ROUTE USER !!
    const userControllers = require("../controllers/user.js");
    
    app.post("/signup", userControllers.signup);
    app.post("/login/:userId", userControllers.login);
    app.delete("/user/:userId", userControllers.delete);

    // ROUTE CRÉATION ARTICLE !!
    const articleControllers = require ('../controllers/article.js');
    
    app.post("/create", articleControllers.create);
    app.delete("/article/:articleId", articleControllers.delete);

    // ROUTE CRÉATION DES GIFS !!
    const gifControllers = require('../controllers/gif.js');

    app.post("/createGif", gifControllers.createGif);
    app.delete("/deleteGif/:gifId", gifControllers.deleteGif);

    

  }