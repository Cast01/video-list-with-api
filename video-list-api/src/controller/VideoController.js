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

  async update(req, res) {
    const { title, link } = req.body;

    if (!title && !link) {
      return res
        .status(400)
        .json({ message: "Você precisa informar o título ou o link." });
    }

    if (title) res.video.title = title;
    if (link) res.video.link = link;

    try {
      await res.video.save();
      return res.status(200).json({ message: "Vídeo atualizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await res.video.remove();
      return res.status(200).json({ message: "Vídeo excluido com sucesso." });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async updateLike(req, res) {
    res.video.liked = !res.video.liked;

    try {
      await res.video.save();
      return res.status(200).json({
        message: `Você ${
          res.video.liked === true ? "deu like" : "retirou o like"
        }`,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
