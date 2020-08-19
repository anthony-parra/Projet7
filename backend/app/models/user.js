const sql = require("../../app.js");

const User = function(user) {
  this.email = user.email
  this.password = user.password
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO Inscription SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Création de l'utilisateur : ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;