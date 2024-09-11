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

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String): Auth
  }
`;

module.exports = typeDefs;
