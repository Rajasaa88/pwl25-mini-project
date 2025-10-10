import express from "express";
import {
  getAllMusics,
  getMusicById,
  addMusic,
  updateMusic,
  deleteMusic
} from "../controllers/musicController.js";
import validate from "../middleware/validate.js";
import logger from "../middleware/logger.js";

const router = express.Router();

// Gunakan middleware logger untuk semua request
router.use(logger);

// Routes utama
router.get("/", getAllMusics);
router.get("/:id", getMusicById);
router.post("/", validate, addMusic);
router.put("/:id", validate, updateMusic);
router.delete("/:id", deleteMusic);

export default router;
