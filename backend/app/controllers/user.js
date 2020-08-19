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