import Question from "../models/Question.js";
import Answer from "../models/Answer.js";

// Ask a question
export const askQuestion = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const newQuestion = new Question({
      title,
      description,
      tags,
      user: req.user.id,
    });
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error posting question", error });
  }
};

// Get all questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("user", "username");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};

// Get single question by ID
export const getSingleQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate("user", "username")
      .populate({
        path: "answers",
        populate: {
          path: "user",
          select: "username"
        }
      });
    if (!question) return res.status(404).json({ message: "Question not found" });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error fetching question", error });
  }
};

// Delete a question (only the owner can delete)
export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });

    if (question.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized to delete this question" });

    await question.remove();
    res.status(200).json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting question", error });
  }
};
