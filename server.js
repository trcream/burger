const express = require("express");

const exphbs = require("express-handlebars");

const burgerController = require("./controllers/burgers_controller");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(burgerController);

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, (err) => {
  if(err) throw err;
  console.log(`listening on PORT: ${PORT}`);
});
