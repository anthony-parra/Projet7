const sql = require("../../app.js");

const Gif = function(e) {
  this.gif = e.gif
};

Gif.create = (newGif, result) => {
    sql.query("INSERT INTO Image SET ?", newGif, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Création du Gif : ", { id: res.insertId, ...newGif });
      result(null, { id: res.insertId, ...newGif });
    });
  }

  Gif.remove = (id, result) => {
    sql.query("DELETE FROM Image WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "Non trouvé !" }, null);
        return;
      }
      console.log("Suppression du Gif avec l'id : ", id);
      result(null, res);
    });
  };

  module.exports = Gif;