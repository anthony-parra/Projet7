const bcrypt = require('bcrypt');
const User = require('../models/user');
const jsonWebToken = require('jsonwebtoken');


// CRÉATION D'UN UTILISATEUR 

exports.signup = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
           const user = new User({
                email: req.body.email,
                password: hash
            })
            User.create(user, (err, data) => {
            if (err)
                res.status(500).json({ message : 'Utilisateur non crée !'})
            else res.send(data);
            });
     }).catch(error => res.status(500).json({ error }));
}

// CONNEXION AVEC UN UTILISATEUR DÉJÀ CRÉE

process.env.SECRET_KEY = 'LA_CLE_SECRETE'

exports.login = (req, res) => {

  User.findById(req.params.userId, (user) => {

    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    } 
    bcrypt.compare(req.params.password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        let token = jsonWebToken.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    ).catch(error => res.status(500).json({ error }));
  });
}
  
// SUPPRESSION D'UN UTILISATEUR

exports.delete = (req, res) => {

    User.remove(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "Non trouvé !") {
          res.status(404).json({ message : 'Utilisateur introuvable avec l\'id : ' + req.params.userId})
        } else {
          res.status(500).json({ message :'Utilisateur introuvable avec l\'id : ' + req.params.userId}) 
            }
        } else res.json({ message : 'Utilisateur supprimé avec succès !'}) 
   })
}
