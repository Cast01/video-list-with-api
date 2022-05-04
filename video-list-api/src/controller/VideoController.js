const Video = require("../models/Video");
const { v4: uuid } = require("uuid");
const { request, response } = require("express");

module.exports = {
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (error) {
      return res.status(400).json({ message: "Nenhum video encontrado." });
    }
  },

  async store(req, res) {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ message: "Titulo ou Link está faltando." });
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false,
    });

    try {
      await video.save();
      return res.status(201).json({ message: "Vídeo criado com sucesso." });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
