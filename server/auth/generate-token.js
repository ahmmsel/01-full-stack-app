import jwt from "jsonwebtoken";

export default function generateToken(user) {
  return jwt.sign({
    id: user.id,
    username: user.username,
    email: user.email
  }, process.env.JWT_KEY, {
    expiresIn: "15d"
  })
}