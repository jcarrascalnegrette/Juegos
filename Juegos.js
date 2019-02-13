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
    // "mongodb://localhost:27017/gouniversity",
    "mongodb+srv://newjuego:@cluster0-qkfic.mongodb.net/admin",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var Juegos = require("./lib01/Juego");

app.get("/Juegos", (req, res) => {
  Juegos.getJuego(req, res);
});

app.get("/Juegos/:id", (req, res) => {
  Juegos.getJuego(req, res);
});

app.post("/Juegos", (req, res) => {
  Juegos.newJuego(req, res);
});
app.put("/agendas/:id", (req, res) => {
  Juegos.updateJuego(req, res);
});

app.delete("/Juegos/:id", (req, res) => {
  Juegos.deleteJuego(req, res);
});

// escuchamos
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
