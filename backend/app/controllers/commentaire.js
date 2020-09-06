const Commentaire = require('../models/commentaire');

//CRÉATION D'UN NOUVEAU COMMENTAIRE

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
        const commentaire = new Commentaire ({
          commentaire: req.body.commentaire
      })
        Commentaire.create(commentaire, (err, data) => {
            if (err)
                res.status(500).json({ message : 'Commentaire non crée !'})
            else res.send(data);
            });
     }

// RÉCUPÉRATION D'UN COMMENTAIRE AVEC SON ID

exports.findOne = (req, res) => {
    Commentaire.findById(req.params.commentaireId, (err, data) => {
      if (err) {
        if (err.kind === "Non trouvé !") {
          res.status(404).send({
            message: `Aucun commentaire trouvé avec l'id : ${req.params.commentaireId}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur avec l'id : " + req.params.commentaireId
          });
        }
      } else res.send(data);
    });
  };