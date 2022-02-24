import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  username: String,
  createdAt: String,
  updateAt: String,
  body: String,
  likes: [
    {
      username: String,
      createdAt: String
    }
  ],
})

export default answerSchema