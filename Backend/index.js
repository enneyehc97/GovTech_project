const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
express.json() 

// parse requests of content-type: application/x-www-form-urlencoded
express.urlencoded()

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to chey application." });
});

require("./app/routes/food.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
