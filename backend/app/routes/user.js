module.exports = app => {
    const user = require("../controllers/user.js");
  
    app.post("/user", user.signup);
    app.get("/user/:userId", user.login);
    app.delete("/user/:userId", user.delete);
  };