import express from "express";

const app = express();

const hello = function (req, res) {
  res.render("index");
};

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.get("/", hello);

app.listen(4000, () => console.log("http://localhost:4000"));
