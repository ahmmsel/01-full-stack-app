import { AuthenticationError } from "apollo-server"
import checkAuth from "../../auth/check-auth.js"
import Question from "../../models/question-model.js"

export default {
  Query: {
  // all questions
    questions: async () => {
      try {
        return await Question.find().sort({ createdAt: -1 })
      } catch (error) {
        console.log(error)
      }
    },
  // single question
    singleQuestion: async (_, { id }) => {
      try {
        return await Question.findById(id)
      } catch (error) {
        console.log(error)
        throw new Error("not found")
      }
    }
  },
  Mutation: {
  // ask the question resolver
    askQuestion: async (_, { askQuestionInput: { body } }, context) => {
      const user = checkAuth(context)

      const newQestion = await new Question({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      })

      return await newQestion.save()
    },

    updateQuestion: async (_, { updateQuestionInput: { id, body } }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(id)

      if (user.username === question.username) {
        question.body = body
        question.updateAt = new Date().toISOString()
      } else {
        throw new AuthenticationError("you cannot update this")
      }

      return await question.save()
    },

    likeQuestion: async (_, { qid }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(qid)

      if (question) {
        const existingLike = question.likes.find(like => like.username === user.username)
        if (existingLike) {
          question.likes.splice(existingLike, 1)
        } else {
          question.likes.push({
            username: user.username,
            createdAt: new Date().toISOString()
          })
        }
        return await question.save()
      } else {
        throw new Error("not found")
      }
    },

    deleteQuestion: async (_, { id }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(id)

      if (user.username === question.username) {
        await question.delete()
        return "deleted question successfuly"
      } else {
        throw new AuthenticationError("You cannot delete this")
      }
    }
  }
}