const { validate: isUuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ message: "Id inválido." });
    }

    try {
      const video = await Video.findById(id);
      res.video = video;

      if (!video) {
        return res.status(404).json({ message: "Vídeo não encontrado." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    next();
  },
};
