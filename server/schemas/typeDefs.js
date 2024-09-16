const typeDefs = `
  type User {
    _id: ID
    email: String
    recipes: [Recipe]
  }

  type Auth {
    token: ID
    user: User
  }

  type Recipe {
    _id: ID
    recipeName: String
    ingredients: String
    image: String
  }

  type Query {
    getCurrent: User
  }

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String, termsAccepted: Boolean): Auth
    login(email: String, password: String): Auth
    saveRecipe(recipeName: String, ingredients: String, image: String): Recipe
  }
`;

module.exports = typeDefs;
