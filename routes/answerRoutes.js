import express from "express";
import {
  postAnswer,
  getAnswersByQuestionId,
  acceptAnswer,
  upvoteAnswer,
  downvoteAnswer
} from "../controllers/answerController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/answers/:questionId
router.post("/:questionId", protect, postAnswer);

// GET /api/answers/:questionId
router.get("/:questionId", getAnswersByQuestionId);

// PUT /api/answers/accept/:answerId
router.put("/accept/:answerId", protect, acceptAnswer);

// PUT /api/answers/upvote/:answerId
router.put("/upvote/:answerId", protect, upvoteAnswer);

// PUT /api/answers/downvote/:answerId
router.put("/downvote/:answerId", protect, downvoteAnswer);

export default router;
