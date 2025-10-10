import * as Music from "../models/musicModel.js";

export const getAllMusics = (req, res, next) => {
  Music.getAllMusics((err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

export const getMusicById = (req, res, next) => {
  const { id } = req.params;
  Music.getMusicById(id, (err, results) => {
    if (err) return next(err);
    res.json(results[0]);
  });
};

export const addMusic = (req, res, next) => {
  Music.addMusic(req.body, (err, results) => {
    if (err) return next(err);
    res.status(201).json({ message: "🎵 Music added", id: results.insertId });
  });
};

export const updateMusic = (req, res, next) => {
  const { id } = req.params;
  Music.updateMusic(id, req.body, (err) => {
    if (err) return next(err);
    res.json({ message: "🎧 Music updated" });
  });
};

export const deleteMusic = (req, res, next) => {
  const { id } = req.params;
  Music.deleteMusic(id, (err) => {
    if (err) return next(err);
    res.json({ message: "🗑️ Music deleted" });
  });
};
