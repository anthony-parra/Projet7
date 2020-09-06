const sql = require("../../connexion");

// CRÉATION D'UN COMMENTAIRE

const Commentaire = function(e) {
    this.commentaire = e.commentaire
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

// RÉCUPÉRATION D'UN COMMENTAIRE AVEC SON ID

Commentaire.findById = (commentaireId, result) => {
    sql.query(`SELECT * FROM Commentaires WHERE id = ${commentaireId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Commentaire trouvé : ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "Non trouve !" }, null);
    });
  };

  module.exports = Commentaire;