module.exports = app => {
    const userControllers = require("../controllers/user.js");
    //const auth = require('../middleware/auth');
  
    app.post("/signup", userControllers.signup);
    app.post("/login/:userId", userControllers.login);
    app.delete("/user/:userId", userControllers.delete);

  }