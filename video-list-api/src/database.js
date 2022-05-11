const mongoose = require("mongoose");

function connectToDataBase() {
  mongoose.connect(process.env.MONGODB_URI);
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));
  db.once("open", () => console.log("Conectado com o MongoDB"));
}

module.exports = connectToDataBase;
