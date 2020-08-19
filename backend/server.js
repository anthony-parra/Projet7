const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/allRoutes.js")(app);

app.listen(3000, () => {
  console.log("Vous êtes connecté au serveur 3000 !");
});

