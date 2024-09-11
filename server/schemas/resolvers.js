const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { email, password, confirmPassword, termsAccepted }
    ) => {
      console.log(termsAccepted);
      if (!termsAccepted) {
        throw new Error("You must accept the terms of conditions.");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const createdUser = await User.create({ email, password });
      const token = signToken(createdUser);
      return { token, user: createdUser };
    },
  },
};

module.exports = resolvers;
