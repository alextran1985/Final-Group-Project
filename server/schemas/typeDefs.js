const typeDefs = `
  type User {
    _id: ID
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
  }

  type Auth {
    token: String
    user: User
  }

  type Recipe {
    _id: ID
    recipeName: String
    ingredients: String
    image: String
  }

  type Query {
    getCurrent(email: String): Auth
  }

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String, termsAccepted: Boolean): Auth
    saveRecipe(recipeName: String, ingredients: String, image: String): Recipe
  }
`;

module.exports = typeDefs;
