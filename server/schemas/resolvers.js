const { User, Recipe } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getCurrent: async (parent, args, context) => {
      const user = await User.findOne({ email: args.email });
      const token = "";
      return {
        token,
        user,
      };
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { email, password, confirmPassword, termsAccepted }
    ) => {
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
    saveRecipe: async (parent, { recipeName, ingredients, image }, context) => {
      // IF we want to PROTECT This action to only logged in users
      if (context.user) {
        // we want to create a new Recipe in the Database
        const newRecipe = await Recipe.create(recipeName, ingredients, image);

        return newRecipe;
      }
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
