import { AuthenticationError } from "apollo-server"
import checkAuth from "../../auth/check-auth.js"
import Question from "../../models/question-model.js"

export default {
  Query: {
    answers: async (_, { qid }) => {
      try {
        const question = await Question.findById(qid)
        
        return question.answers
      } catch (error) {
        throw new Error("not found")
      }
    },
    singleAnswer: async (_, { qid, answerId }) => {
      try {
        const { answers } = await Question.findById(qid)
        const answerIndex = answers.findIndex(answer => answer.id === answerId)
        return answers[answerIndex]
      } catch (error)  {
        throw new Error("this answer is not found")
      }
    }
  },

  Mutation: {
    // answer the question resolver
    answerQuestion: async (_, { answerQuestionInput: { id, body } }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(id)

      question.answers.unshift({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date()
      })

      return await question.save()
    },

    updateAnswer: async (_, { updateAnswerInput: { qid, answerId, body } } ,context) => {
      const user = checkAuth(context)

      const question = await Question.findById(qid)

      const { answers } = question

      const findingAnswerId = answers.find(a => a.id === answerId)

      const answerIndex = answers.findIndex(answer => answer.id === answerId)
      console.log(findingAnswerId)
      if (user.username === answers[answerIndex].username) {
        answers[answerIndex].body = body
        answers[answerIndex].updateAt = new Date().toISOString()
      } else {
        throw new AuthenticationError("you cannot update this answer")
      }

      await question.save()
      return answers[answerIndex]
    },

    likeAnswer: async (_, { qid, answerId }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(qid)

      const { answers } = question

      const answerIndex = answers.findIndex(answer => answer.id === answerId)

      let { likes } = answers[answerIndex]

      if (question) {
        const existingLike = likes.find(like => like.username === user.username)
        if (existingLike) {
          likes = likes.splice(existingLike, 1)
        } else {
          likes.push({
            username: user.username,
            createdAt: new Date().toISOString()
          })
        }
        await question.save()
        return answers[answerIndex]
      } else {
        throw new Error("not found")
      }
    },

    deleteAnswer: async (_, { qid, answerId }, context) => {
      const user = checkAuth(context)

      const question = await Question.findById(qid)

      const answerIndex = question.answers.findIndex(answer => answer.id === answerId)

      if (user.username === question.answers[answerIndex].username || user.username === question.username) {
        question.answers.splice(answerIndex, 1)
        return await question.save() 
      } else {
        throw new AuthenticationError("You cannot delete this")
      }
    }
  }
}