import { gql } from "apollo-server";

const typeDefs = gql`
  input RegisterUserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginUserInput {
    username: String!
    password: String!
  }

  input DeleteAccountInput {
    username: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
    followers: [User!]
    following: [User!]
  }

  type Question {
    id: ID!
    user: ID!
    username: String!
    createdAt: String!
    updatedAt: String
    body: String!
    likes: [Like]
    answers: [Answer]
  }

  type Like {
    id: ID!
    username: String!
    createdAt: String!
  }

  type Answer {
    id: ID!
    username: String!
    createdAt: String!
    updatedAt: String
    body: String!
    likes: [Like]
  }

  input AskQuestionInput {
    body: String!
  }

  input UpdateQuestionInput {
    id: ID!
    body: String!
  }

  input AnswerQuestionInput {
    id: ID!
    body: String!
  }

  input UpdateAnswerInput {
    qid: ID!
    answerId: ID!
    body: String!
  }

  type Query {
    users: [User]
    questions: [Question]
    singleQuestion(id: ID!): Question
    answers(qid: ID!): [Answer]
    singleAnswer(qid: ID! answerId: ID!): Answer
  }

  type Mutation {
    registerUser(registerUserInput: RegisterUserInput): User
    loginUser(loginUserInput: LoginUserInput): User
    askQuestion(askQuestionInput: AskQuestionInput): Question
    updateQuestion(updateQuestionInput: UpdateQuestionInput): Question
    answerQuestion(answerQuestionInput: AnswerQuestionInput): Answer
    updateAnswer(updateAnswerInput: UpdateAnswerInput): Answer
    likeQuestion(qid: ID!): Question!
    likeAnswer(qid: ID!, answerId: ID!): Answer!
    deleteAccount(deleteAccountInput: DeleteAccountInput): String!
    deleteQuestion(id: ID!): String!
    deleteAnswer(qid: ID!, answerId: ID!): Question!
  }
`

export default typeDefs;