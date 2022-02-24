import { gql } from "@apollo/client";

const LIKE_Q = gql`
  mutation LikeQuestion($qid: ID!) {
    likeQuestion(qid: $qid) {
      id
      likes {
        id
        username
      }
    }
  }
`
const LIKE_A = gql`
    mutation LikeAnswer($qid: ID! $answerId: ID!) {
        likeAnswer(qid: $qid answerId: $answerId) {
            id
            likes {
                id
                username
            }
        }
    }
`

export {
    LIKE_Q,
    LIKE_A
}