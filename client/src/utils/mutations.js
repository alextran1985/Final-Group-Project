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

export const USER_LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe($title: String, $ingredients: String, $image: String) {
    saveRecipe(recipeName: $title, ingredients: $ingredients, image: $image) {
      _id
      recipeName
      ingredients
      image
    }
  }
`;
