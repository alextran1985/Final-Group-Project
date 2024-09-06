const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const createdUser = await User.create({ username, email, password });
      return createdUser;
    },
  },
};

module.exports = resolvers;
