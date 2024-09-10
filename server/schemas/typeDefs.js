const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(email: String, password: String, confirmPassword: String): User
  }
`;

module.exports = typeDefs;
