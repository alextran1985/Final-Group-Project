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

export const EDIT_USER = gql`
  mutation updateUser(
    $name: String
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    updateUser(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      user {
        _id
        name
        email
        password
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

export const CREATE_RECIPE = gql`
  mutation createRecipe($recipeData: RecipeInput) {
    createRecipe(recipeData: $recipeData) {
      _id
      title
      description
      duration
      cost
      image
      ingredients
      directions
      creator {
        _id
        email
      }
    }
  }
`;
