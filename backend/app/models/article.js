const sql = require("../../app.js");

const Article = function(e) {
  this.article = e.article
};

Article.create = (newArticle, result) => {
    sql.query("INSERT INTO Article SET ?", newArticle, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Création de l'article : ", { id: res.insertId, ...newArticle });
      result(null, { id: res.insertId, ...newArticle });
    });
  }


  Article.remove = (id, result) => {
    sql.query("DELETE FROM Article WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "Non trouvé !" }, null);
        return;
      }
      console.log("Suppression de l'article avec l'id : ", id);
      result(null, res);
    });
  };
  module.exports = Article;