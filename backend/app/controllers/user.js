const User = require("../models/user.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Le champ doit être rempli !"
      });
    }

    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite !"
        });
      else res.send(data);
    });
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

  exports.findOne = (req, res) => {
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
      } else res.send(data);
    });
  };