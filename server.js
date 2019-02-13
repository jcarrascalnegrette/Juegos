//importamos
const express = require("express");
const mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
.connect(
  "mongodb+srv://juego:juego01@cluster0-rdniu.mongodb.net/test?retryWrites=true",
    // "mongodb://localhost:27017/gouniversity",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var Juego = require("./lib01/Juego");

app.get("/Game", (req, res) => {
  Juego.getJuego(req, res);
});

app.get("/Game/:id", (req, res) => {
  Juego.getJuego(req, res);
});

app.post("/Game", (req, res) => {
  Juego.newJuego(req, res);
});
app.put("/Game/:id", (req, res) => {
  Juego.updateJuego(req, res);
});

app.delete("/Game/:id", (req, res) => {
  Juego.deleteJuego(req, res);
});
// escuchamos
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
