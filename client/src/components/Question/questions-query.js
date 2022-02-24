import { gql } from "@apollo/client"

const ALL_QUESTIONS = gql`
  query GetQuestions {
    questions {
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

const SINGLE_QUESTION = gql`
  query SingleQuestion($id: ID!) {
    singleQuestion(id: $id) {
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
        username
        createdAt
        body
        likes {
          id
          username
        }
      }
    }
  }
` 

export {
  ALL_QUESTIONS,
  SINGLE_QUESTION
}