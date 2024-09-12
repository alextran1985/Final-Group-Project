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
      _id
      email
      password
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
`
