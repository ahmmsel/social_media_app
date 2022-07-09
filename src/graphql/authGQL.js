import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Register(
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      input: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      token
    }
  }
`;

const LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      id
      token
    }
  }
`;

export { REGISTER, LOGIN };
