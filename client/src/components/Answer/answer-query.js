import { gql } from "@apollo/client";

const SINGLE_A = gql`
  query SingleAnswer($qid: ID! $answerId: ID!) {
    singleAnswer(qid: $qid answerId: $answerId) {
      id
      body
    }
  }
`

export {
  SINGLE_A
}