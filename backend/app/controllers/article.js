const Article = require('../models/article');
const Commentaire = require('../models/commentaire')


// CRÉATION D'UN ARTICLE

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
        const article = new Article ({
          titre: req.body.titre,
          article: req.body.article,
          user_id: req.body.user_id
      })
        Article.create(article, (err, data) => {
            if (err)
                res.status(500).json({ message : 'Article non crée !'})
            else res.send(data)
            });
     }

// RÉCUPÉRATION DE TOUS LES ARTICLES AVEC LES COMMENTAIRES ASSOCIÉS

exports.findAll = (req, res) => {

  Article.getAll((err, articles) => {
    if (err)
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    else {
      console.log('articleController',articles)
      //Récupération de tous les commentaires
      Commentaire.getAll((err, commentaires) => {
        if (err){
          res.status(500).send({ message: 'On a rien trouvé !' + err });
        } else {
          commentaires.forEach(commentaire => {
            let article = articles.find(elt => elt.post_id === commentaire.post_id)
            article.comments.push(commentaire)
          })
        res.send(articles)  
        }
      }
      )}
  })
}

// RÉCUPÉRATION D'UN ARTICLE AVEC LES COMMENTAIRES ASSOCIÉS

exports.findOne = (req, res) => {
  Article.findById(req.params.articleId, (err, articles) => {
    if (err) {
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    }
      else {
        Commentaire.getAll((err, commentaires) => {
          if (err){
            res.status(500).send({ message: 'On a rien trouvé !' + err });
          } else {
            commentaires.forEach(commentaire => {
              if(articles[0].post_id === commentaire.post_id){
                articles[0].comments.push(commentaire)
              }
            })
          }
          res.send(articles)
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