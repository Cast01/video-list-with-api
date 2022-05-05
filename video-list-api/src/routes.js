const express = require("express");
const routes = express.Router();
const VideoController = require("./controller/VideoController");
const VideoMiddlewere = require("./middleweres/VideoMiddlewere");

// GET = Buscar uma informação
// POST = Cria uma informação
// PUT = Edita uma informão por completo
// PATCH = Edita apenas uma parte da informação
// DELETE = Deleta uma informação

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);
routes.put("/videos/:id", VideoMiddlewere.validateId, VideoController.update);
routes.delete(
  "/videos/:id",
  VideoMiddlewere.validateId,
  VideoController.delete
);
routes.patch(
  "/videos/:id",
  VideoMiddlewere.validateId,
  VideoController.updateLike
);

module.exports = routes;
