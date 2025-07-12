import express from "express";
import {
  askQuestion,
  getAllQuestions,
  getSingleQuestion,
  deleteQuestion
} from "../controllers/questionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/questions
router.post("/", protect, askQuestion);

// GET /api/questions
router.get("/", getAllQuestions);

// GET /api/questions/:id
router.get("/:id", getSingleQuestion);

// DELETE /api/questions/:id
router.delete("/:id", protect, deleteQuestion);

export default router;
