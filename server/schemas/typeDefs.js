const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
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
    createUser(email: String, password: String, confirmPassword: String): User
    saveRecipe(recipeName: String, ingredients: String, image: String): Recipe
  }
`;

module.exports = typeDefs;
