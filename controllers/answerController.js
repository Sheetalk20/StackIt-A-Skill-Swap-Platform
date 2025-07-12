import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

// ✅ 1. Post an answer to a question
export const postAnswer = async (req, res) => {
  try {
    const { text } = req.body;
    const { questionId } = req.params;

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });

    const newAnswer = new Answer({
      text,
      user: req.user.id,
      question: questionId
    });

    const savedAnswer = await newAnswer.save();

    question.answers.push(savedAnswer._id);
    await question.save();

    res.status(201).json(savedAnswer);
  } catch (error) {
    res.status(500).json({ message: "Error posting answer", error });
  }
};

// ✅ 2. Get all answers for a specific question
export const getAnswersByQuestionId = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ question: questionId })
      .populate("user", "username")
      .sort({ createdAt: -1 });
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching answers", error });
  }
};

// ✅ 3. Accept an answer (question owner only)
export const acceptAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });

    const question = await Question.findById(answer.question);
    if (!question) return res.status(404).json({ message: "Question not found" });

    if (question.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized to accept answer" });

    question.acceptedAnswer = answerId;
    await question.save();

    res.status(200).json({ message: "Answer accepted" });
  } catch (error) {
    res.status(500).json({ message: "Error accepting answer", error });
  }
};

// ✅ 4. Upvote an answer
export const upvoteAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });

    // Prevent duplicate upvotes
    if (answer.upvotes.includes(req.user.id)) {
      return res.status(400).json({ message: "Already upvoted" });
    }

    // Remove downvote if it exists
    answer.downvotes = answer.downvotes.filter(id => id.toString() !== req.user.id);
    answer.upvotes.push(req.user.id);
    await answer.save();

    res.status(200).json({ message: "Answer upvoted" });
  } catch (error) {
    res.status(500).json({ message: "Error upvoting", error });
  }
};

// ✅ 5. Downvote an answer
export const downvoteAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });

    // Prevent duplicate downvotes
    if (answer.downvotes.includes(req.user.id)) {
      return res.status(400).json({ message: "Already downvoted" });
    }

    // Remove upvote if it exists
    answer.upvotes = answer.upvotes.filter(id => id.toString() !== req.user.id);
    answer.downvotes.push(req.user.id);
    await answer.save();

    res.status(200).json({ message: "Answer downvoted" });
  } catch (error) {
    res.status(500).json({ message: "Error downvoting", error });
  }
};
