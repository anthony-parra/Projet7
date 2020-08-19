const User = require("../models/user.js");
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Le champ doit être rempli !"
      });
    }
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
    });

    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite !"
        });
      else res.send(data);
    });
      })   
  };

  exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "Non trouvé !") {
          res.status(404).send({
            message: `Utilisateur non trouvé avec l'id : ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "On ne peut pas supprimer l'utilisateur avec l'id : " + req.params.userId
          });
        }
      } else res.send({ message: `Utilisateur supprimé avec succès !` });
    });
  };

  exports.login = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "Non trouvé !") {
          res.status(404).send({
            message: `Utilisateur non trouvé avec l'id : ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "On ne retrouve pas l'utilisateur avec l'id " + req.params.userId
          });
        }
      } else res.send(data)
      bcrypt.compare(req.body.password, userId.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    } else {
                      res.status(200).json({
                        userId: userId,
                        token: jsonWebToken.sign({ userId: userId },
                            'LA_CLE_SECRETE', { expiresIn: '24h' }
                        )
                    })
                    return res.status(200).json({ message : 'Création du token réussi !'})
                  }
                })
                .catch(error => res.status(500).json({ error }));
                    
      
    });
  };