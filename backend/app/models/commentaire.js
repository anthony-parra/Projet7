const sql = require("../../connexion");

const Commentaire = function(e) {
    this.commentaire = e.commentaire;
    this.post_id = e.post_id;
    this.user_id = e.user_id;
    this.date = e.date;
    this.email = e.email;
  }

// CRÉATION D'UN COMMENTAIRE

  Commentaire.create = (newCommentaire, result) => {
    sql.query("INSERT INTO Commentaires SET ?", newCommentaire, (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(err, null);
        return;
      }
      console.log("Création du commentaire : ", { id: res.insertId, ...newCommentaire });
      result(null, { id: res.insertId, ...newCommentaire });
    });
  }

// RÉCUPÉRATION DE TOUS LES COMMENTAIRES

Commentaire.getAll = result => {
  sql.query("SELECT * FROM Commentaires ORDER BY id DESC", (err, res) => {
    if (err) {
      console.log("erreur: ", err);
      result(null, err);
      return;
    }
    console.log("Commentaire : ", res);
    result(null, res);
  });
};

  module.exports = Commentaire;