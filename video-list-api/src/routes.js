const express = require("express");
const routes = express.Router();

// GET = Buscar uma informação
// POST = Cria uma informação
// PUT = Edita uma informão por completo
// PATCH = Edita apenas uma parte da informação
// DELETE = Deleta uma informação

routes.get("/", (req, res) => res.send("Hello world"));

module.exports = routes;
