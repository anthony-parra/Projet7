module.exports = app => {
    const user = require("../controllers/user.js");
  
    // Create a new Customer
    app.post("/user", user.create);
  
  };