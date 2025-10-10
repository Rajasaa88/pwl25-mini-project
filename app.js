import express from "express";
import dotenv from "dotenv";
import musicRoutes from "./routes/musicRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/musics", musicRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎶 Server berjalan di http://localhost:${PORT}`);
});
