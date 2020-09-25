const sql = require("../../connexion");

const Article = function(e) {
  this.titre = e.titre
  this.article = e.article
  this.post_id = e.id
  this.comments = e.comments ? e.comments : []
  this.date = e.date
};

// CRÉATION D'UN NOUVEL ARTICLE

Article.create = (newArticle, result) => {
    sql.query(`INSERT INTO Article (titre, article) VALUES ('${newArticle.titre}','${newArticle.article}')`, (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(err, null);
        return;
      }
      console.log("Création de l'article : ", { id: res.insertId, ...newArticle });
      result(null, { id: res.insertId, ...newArticle });
    });
  }

// RÉCUPÉRATION DE TOUS LES ARTICLES

  Article.getAll = result => {
    sql.query("SELECT a.id, a.titre, a.article, a.date, a.user_id AS \"author_id\", i.email, i.nom, i.prenom FROM Article a INNER JOIN Inscription i ON a.user_id = i.id ORDER BY date DESC", (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(null, err);
        return;
      }
      let articles = [];
      articles = res.map(element => {
        let post = new Article(element)
        post.author = {
          nom: element.nom,
          prenom: element.prenom,
          email: element.email,
          id: element.id
        }
        return post;
      })
      console.log("article : ", articles);
      result(null, articles);
    });
  };

// RÉCUPÉRATION D'UN ARTICLE AVEC SON ID

  Article.findById = (articleId, result) => {
    sql.query(`SELECT * FROM Article WHERE id = ${articleId}`, (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(err, null);
        return;
      }
      if (res) {
        let articles = [];
        articles = res.map(element => {
        return new Article(element);
      })
        console.log("Article trouvé ! : ", articles);
        result(null, articles);
        return;
      }
      // not found Customer with the id
      result({ kind: "Non trouvé" }, null);
    });
  };

// SUPPRESSION D'UN ARTICLE AVEC SON ID

  Article.remove = (id, result) => {
    sql.query("DELETE FROM Article WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("erreur: ", err);
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