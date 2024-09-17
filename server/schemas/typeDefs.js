const typeDefs = `
  type User {
    _id: ID
    name: String
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
    recipeName: String
    ingredients: String
    image: String
  }

  type Query {
    getCurrent: User
  }

  type Mutation {
    createUser(name: String, email: String, password: String, confirmPassword: String, termsAccepted: Boolean): Auth
    updateUser(name: String, email: String, password: String, confirmPassword: String): User
    login(name: String, email: String, password: String): Auth
    saveRecipe(recipeName: String, ingredients: String, image: String): Recipe
  }
`;

module.exports = typeDefs;
