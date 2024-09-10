const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, { email, password, confirmPassword }) => {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const createdUser = await User.create({ email, password });
      return createdUser;
    },
  },
};

module.exports = resolvers;
