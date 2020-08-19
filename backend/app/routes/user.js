module.exports = app => {
    const user = require("../controllers/user.js");
  
    app.post("/user", user.create);
    app.delete("/user/:userId", user.delete);
    app.get("/user/:userId", user.findOne);
  
  };