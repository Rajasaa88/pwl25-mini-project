import db from "../config/db.js";

export const getAllMusics = (callback) => {
  db.query("SELECT * FROM musics", callback);
};

export const getMusicById = (id, callback) => {
  db.query("SELECT * FROM musics WHERE id = ?", [id], callback);
};

export const addMusic = (data, callback) => {
  const { title, artist, genre, release_date, duration } = data;
  db.query(
    "INSERT INTO musics (title, artist, genre, release_date, duration) VALUES (?, ?, ?, ?, ?)",
    [title, artist, genre, release_date, duration],
    callback
  );
};

export const updateMusic = (id, data, callback) => {
  const { title, artist, genre, release_date, duration } = data;
  db.query(
    "UPDATE musics SET title=?, artist=?, genre=?, release_date=?, duration=? WHERE id=?",
    [title, artist, genre, release_date, duration, id],
    callback
  );
};

export const deleteMusic = (id, callback) => {
  db.query("DELETE FROM musics WHERE id=?", [id], callback);
};
