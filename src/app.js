const path = require("path");
const express = require("express");
const app = express();

const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

app.listen(7500, () => {
  console.log("Application listening to port Number #7500");
});
