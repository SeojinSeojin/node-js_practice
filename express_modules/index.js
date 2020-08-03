const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use(express.static("public"));

const controller = require("./router/controller")(app);

PORT = 1234;
const server = app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
});