const Juego = require("./JuegoSchema");
exports.getJuego = (req, res) => {
  Juego.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Juego);
  });
};

exports.getJuego = (req, res) => {
  let id = req.params.id;
  let nombre =req.params.nombre;


  Juego.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Juego);
  });
};

exports.newJuego = (req, res) => {
  const newJuego = new Juego(req.body);
  newJuego.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newJuego);
  });
};

exports.updateJuego = (req, res) => {
  let nombre = req.body.nombre;
  Juego.findOneAndUpdate(
    req.params.id,req.body,{new:true},
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteJuego = (req, res) => {
  Juego.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
