import mongoose from "mongoose";

import answerSchema from "./answer-model.js";

const questionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  username: String,
  createdAt: String,
  updatedAt: String,
  body: String,
  likes: [
    {
      username: String,
      createdAt: String
    }
  ],
  answers: [answerSchema]
})

export default mongoose.model("Question", questionSchema)