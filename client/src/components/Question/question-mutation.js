import { gql } from "@apollo/client";

const ASK_QUESTION = gql`
  mutation AskQuestion($body: String!) {
    askQuestion(askQuestionInput: {
      body: $body
    }){
      id
      username
      createdAt
      body
      likes {
        id
        username
      }
      answers {
        id
      }
    }
  }
`

const UPDATE_Q = gql`
  mutation UpdateQuestion($id: ID! $body: String!) {
    updateQuestion(updateQuestionInput: {
      id: $id body: $body
    }) {
      id
      body
    }
  }
`

const DELETE_Q = gql`
  mutation DeleteQuestion($id: ID!) {
    deleteQuestion(id: $id)
  }
`

export {
  ASK_QUESTION,
  UPDATE_Q,
  DELETE_Q
}