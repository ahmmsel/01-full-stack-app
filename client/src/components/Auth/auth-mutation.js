import { gql } from "@apollo/client";

const LOGIN = gql`
mutation LoginUser($username: String! $password: String!) {
    loginUser(
      loginUserInput: {
        username: $username
        password: $password
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`

const REGISTER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerUser(
      registerUserInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`

export {
  LOGIN,
  REGISTER
}