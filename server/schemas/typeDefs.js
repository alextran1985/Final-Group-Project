const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
    recipes: [Recipe]
  }

  type Auth {
    token: ID
    user: User
  }

  type Recipe {
    _id: ID
    title: String
    description: String
    duration: String
    cost: String
    image: String
    ingredients: [String]
    directions: [String]
    creator: User
  }

  type Query {
    getCurrent: User
    getUserRecipes: [Recipe]
  }

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String, termsAccepted: Boolean): Auth
    updateUser(name: String, email: String, password: String, confirmPassword: String): User
    login(email: String, password: String): Auth
    saveRecipe(recipeName: String, ingredients: String, image: String): Recipe
    createRecipe(recipeData: RecipeInput): Recipe
  }
  input RecipeInput {
    title: String
    description: String
    duration: String
    cost: String
    image: String
    ingredients: [String]
    directions: [String]
  }
`;

module.exports = typeDefs;
