import { gql } from "@apollo/client";

const ANSWER_Q = gql`
  mutation AnswerQuestion($id: ID! $body: String!) {
    answerQuestion(answerQuestionInput: { id: $id body: $body }) {
      id
      username
      createdAt
      body
      likes {
        id
        username
      }
    }
  }
`

const UPDATE_A = gql`
  mutation UpdateAnswer($qid: ID! $answerId: ID! $body: String!) {
    updateAnswer(updateAnswerInput: {
      qid: $qid
      answerId: $answerId
      body: $body
    }) {
      id
    }
  }
`

const DELETE_A = gql`
  mutation DeleteAnswer($qid: ID! $answerId: ID!) {
    deleteAnswer(qid: $qid answerId: $answerId) {
      id
      username
    }
  }
`

export {
  ANSWER_Q,
  UPDATE_A,
  DELETE_A
}