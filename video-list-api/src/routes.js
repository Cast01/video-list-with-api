const express = require("express");
const routes = express.Router();
const VideoController = require("./controller/VideoController");

// GET = Buscar uma informação
// POST = Cria uma informação
// PUT = Edita uma informão por completo
// PATCH = Edita apenas uma parte da informação
// DELETE = Deleta uma informação

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);

module.exports = routes;
