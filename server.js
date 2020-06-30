const express = require("express");

const exphbs = require("express-handlebars");

const burgerRoutes = require("./controllers/burgers_controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burgerRoutes);

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
