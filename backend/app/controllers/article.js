const Article = require('../models/article');

// CRÉATION D'UN ARTICLE

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
        const article = new Article ({
          titre: req.body.titre,
          article: req.body.article
      })
        Article.create(article, (err, data) => {
            if (err)
                res.status(500).json({ message : 'Article non crée !'})
            else res.send(data);
            });
     }

exports.findAll = (req, res) => {

  Article.getAll((err, data) => {
    if (err)
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    else res.send(data);
  });
};

     // SUPPRESSION D'UN ARTICLE

exports.delete = (req, res) => {

    Article.remove(req.params.articleId, (err, data) => {
      if (err) {
        if (err.kind === "Non trouvé !") {
          res.status(404).json({ message : 'Article introuvable avec l\'id : ' + req.params.articleId})
        } else {
          res.status(500).json({ message :'Article introuvable avec l\'id : ' + req.params.articleId}) 
            }
        } else res.json({ message : 'Article supprimé avec succès !'}) 
   })
}