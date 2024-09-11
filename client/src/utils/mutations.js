import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String
    $password: String
    $confirmPassword: String
    $termsAccepted: Boolean
  ) {
    createUser(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      termsAccepted: $termsAccepted
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;
