import { gql } from "@apollo/client";

export const QUERY_CURRENT_USER = gql`
  query getCurrent($email: String) {
    getCurrent(email: $email) {
      _id
      username
      email
      recipes {
        _id
        recipeName
        ingredients
        image
      }
    }
  }
`;

// # Fetch all recipes
export const GetAll_Recipes = gql`
  query GetAllRecipes {
    recipes {
      id
      title
      description
      ingredients
      image
      duration
      cost
      directions
    }
  }
`;

// # Fetch a specific recipe by ID
export const GetRecipe_byId = gql`
  query GetRecipeById($id: ID!) {
    recipe(id: $id) {
      id
      title
      description
      ingredients
      image
      duration
      cost
      directions
    }
  }
`;

export const GET_USER_RECIPES = gql`
  query getUserRecipes {
    getUserRecipes {
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
