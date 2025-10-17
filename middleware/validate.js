export default function validate(req, res, next) {
  const { title, artist, genre, release_date, duration } = req.body;

  if (!title || !artist || !genre || !release_date || !duration) {
    return res.status(400).json({ message: "⚠️ All fields are required" });
  }

  next();
}
