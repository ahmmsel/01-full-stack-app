import jwt from "jsonwebtoken"

export default function checkAuth(ctx) {
  const authHeader = ctx.req.headers.authorization
  
  if (authHeader) {
    const token = authHeader.split(" ")[1]

    if (token) {
      try {
        return jwt.verify(token, process.env.JWT_KEY)
      } catch (error) {
        throw new Error("invalid token")
      }
    } else {
      throw new Error("there is no token")
    }
  }

  throw new Error("Authorization must be provide")
}