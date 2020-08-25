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


exports.login = (req, res) => {
  User.findOne(req.body.email, (err, user) => {
    if(err){
      res.status(400).json({ message : err })
    }
    if (user) {
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid){
              res.status(401).json({ message : 'Mot de passe incorrect !' })
            }
            res.status(200).json({
              userId : user.id, 
              token : jsonWebToken.sign({ userId : user.id }, 'LA_CLE_SECRETE', {
              expiresIn: '24h'
          })

            })
        })  
        }}
        )}
      
  
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
