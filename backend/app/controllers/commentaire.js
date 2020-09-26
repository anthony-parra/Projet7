const Commentaire = require('../models/commentaire');

//CRÉATION D'UN NOUVEAU COMMENTAIRE

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
        const commentaire = new Commentaire ({
          commentaire: req.body.commentaire,
          user_id: req.body.user_id,
          post_id: req.body.post_id,
      });
        Commentaire.create(commentaire, (err, data) => {
            if (err)
                res.status(500).json({ message : 'Commentaire non crée !'})
            else res.send(data);
            });
     }

// RÉCUPÉRATION DE TOUS LES COMMENTAIRES

exports.findAll = (req, res) => {

  Commentaire.getAll((err, data) => {
    if (err)
      res.status(500).send({ message: 'On a rien trouvé !' + err });
    else res.send(data);
  });
};