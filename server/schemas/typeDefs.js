const typeDefs = `
  type User {
    _id: ID
    email: String
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
    getCurrent(email: String): Auth
    getUserRecipes: [Recipe]
  }

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String, termsAccepted: Boolean): Auth
    login(email: String, password: String): Auth
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
