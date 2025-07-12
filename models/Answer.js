import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    text: {
      type: String, // Rich text HTML/Markdown
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true
    },
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Answer", answerSchema);
