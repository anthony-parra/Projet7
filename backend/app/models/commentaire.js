const sql = require("../../connexion");

// CRÉATION D'UN COMMENTAIRE

const Commentaire = function(e) {
    this.commentaire = e.commentaire;
    this.post_id = e.post_id;
    this.user_id = e.user_id;
  }

  Commentaire.create = (newCommentaire, result) => {
    sql.query("INSERT INTO Commentaires SET ?", newCommentaire, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Création du commentaire : ", { id: res.insertId, ...newCommentaire });
      result(null, { id: res.insertId, ...newCommentaire });
    });
  }

// RÉCUPÉRATION DE TOUS LES COMMENTAIRE 

Commentaire.getAll = result => {
  sql.query("SELECT * FROM Commentaires", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Commentaire : ", res);
    result(null, res);
  });
};

  module.exports = Commentaire;