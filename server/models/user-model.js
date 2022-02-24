import mongoose from "mongoose";

const user = {
  username: String,
  password: String,
  email: String,
  createdAt: String,
}

const userSchema = new mongoose.Schema({
  ...user,
  followers: [{ ...user }],
  following: [{ ...user }]
})

export default mongoose.model("User", userSchema)