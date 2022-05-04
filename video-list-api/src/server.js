require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const connectToDataBase = require("./database");
const cors = require("cors");

const app = express();

connectToDataBase();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3001;
app.listen(port, () => {
  console.log("Servidor iniciado na porta 3001");
});
