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

User.remove = (id, result) => {
  sql.query("DELETE FROM Inscription WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
    
      result({ kind: "Utilisateur non trouvé !" }, null);
      return;
    }

    console.log("Suppression de l'utilisateur avec : ", id);
    result(null, res);
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM Inscription WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Utilisateur trouvé ! : ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "Non trouvé !" }, null);
  });
};

module.exports = User;