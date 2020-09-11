const sql = require("../../connexion");

const Article = function(e) {
  this.titre = e.titre
  this.article = e.article
  this.post_id = e.post_id
  this.comments = e.comments
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

  Article.getAll = result => {
    sql.query("SELECT * FROM Article", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("article : ", res);
      result(null, res);
    });
  };

  Article.findById = (articleId, result) => {
    sql.query(`SELECT * FROM Article WHERE id = ${articleId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Article trouvé ! : ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Non trouvé" }, null);
    });
  };

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