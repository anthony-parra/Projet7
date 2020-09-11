const Article = require('../models/article');
const Commentaire = require('../models/commentaire')

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

  Article.getAll((err, articles) => {
    if (err)
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    else {
      
      //Récupération de tous les commentaires
      Commentaire.getAll((err, commentaires) => {
        if (err){
          res.status(500).send({ message: 'On a rien trouvé !' + err });
        } else {
          commentaires.forEach(commentaire => {
            let article = articles.find(elt => elt.id === commentaire.post_id)
            article.post_id = commentaire.post_id
            article.comments = commentaire.commentaire
          })
        res.send(articles)  
        }
      }
      )}
  })
}

exports.findOne = (req, res) => {
  Article.findById(req.params.articleId, (err, article) => {
    if (err) {
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    }
       else {
         
        Commentaire.getAll((err, commentaires) => {
          if (err){
            res.status(500).send({ message: 'On a rien trouvé !' + err });
          } else {
            commentaires.forEach(commentaire => {
              if(article.id === commentaire.post_id){
                article.comments = commentaire.commentaire
                article.post_id = commentaire.post_id
              }  
            })
          res.send(article)  
          }
        })
      }
  })
}

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