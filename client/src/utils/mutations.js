import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    createUser(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;
