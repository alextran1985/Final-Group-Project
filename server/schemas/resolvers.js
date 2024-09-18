const { User, Recipe } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getCurrent: async (parent, args, context) => {
      console.log("Hit Server Method...");
      console.log("Context User: ", context.user);

      if (context.user) {
        const userData = await User.findById(context.user._id);
        console.log("Current User: ", userData);
        return userData;
      }
      throw AuthenticationError;
    },
    getUserRecipes: async (_, args, { token, user }) => {
      const recipes = await Recipe.find({ creator: user._id });
      return recipes;
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { name, email, password, confirmPassword, termsAccepted }
    ) => {
      if (!termsAccepted) {
        throw new Error("You must accept the terms of conditions.");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const createdUser = await User.create({ name, email, password });
      console.log("New User: ", createdUser);
      const token = signToken(createdUser);
      console.log("Token: ", token);
      return { token, user: createdUser };
    },
    updateUser: async (
      parent,
      { name, email, password, confirmPassword },
      context
    ) => {
      if (!context.user) {
        throw new Error("User not found");
      }
      const updatedUser = await User.findByIdAndUpdate(context.user._id, {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log("Updated: ", updatedUser);

      return updatedUser;
    },
    login: async (_, { email, password }) => {
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        throw AuthenticationError;
      }
      const correctPw = await foundUser.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error("User not found");
      }

      const token = signToken(foundUser);
      return { token, user: foundUser };
    },
    createRecipe: async (_, { recipeData }, { token, user }) => {
      if (user) {
        const recipe = await Recipe.create({
          ...recipeData,
          creator: user._id,
        });
        const populatedRecipe = await recipe.populate("creator", "email");
        return populatedRecipe;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
