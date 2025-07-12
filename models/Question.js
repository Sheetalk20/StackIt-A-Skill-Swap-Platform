import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String, // Rich text stored as HTML or Markdown
      required: true
    },
    tags: [
      {
        type: String
      }
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    answers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
      }
    ],
    acceptedAnswer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
