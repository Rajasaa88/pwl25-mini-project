import db from "../config/db.js";

export const getAllMusics = (callback) => {
  db.query("SELECT * FROM musics", callback);
};

export const getMusicById = (id, callback) => {
  db.query("SELECT * FROM musics WHERE id = ?", [id], callback);
};

export const addMusic = (data, callback) => {
  const { title, album, genre, release_date, duration, is_favorite } = data;
  db.query(
    "INSERT INTO musics (title, album, genre, release_date, duration, is_favorite) VALUES (?, ?, ?, ?, ?, ?)",
    [title, album, genre, release_date, duration, is_favorite],
    callback
  );
};

export const updateMusic = (id, data, callback) => {
  const { title, album, genre, release_date, duration, is_favorite } = data;
  db.query(
    "UPDATE musics SET title=?, album=?, genre=?, release_date=?, duration=?, is_favorite=? WHERE id=?",
    [title, album, genre, release_date, duration, is_favorite, id],
    callback
  );
};

export const deleteMusic = (id, callback) => {
  db.query("DELETE FROM musics WHERE id=?", [id], callback);
};
