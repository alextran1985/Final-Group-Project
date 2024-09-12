const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
    getCurrent: async (parent, args, context) => {
      const user = await User.findOne({ email: args.email})
      const token = ''
      return { 
        token,
        user
      }
    }
  },
  Mutation: {
    createUser: async (parent, { email, password, confirmPassword }) => {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const createdUser = await User.create({ email, password });
      return createdUser;
    },
    saveRecipe: async (parent, { recipeName, ingredients, image }, context) => {
      // IF we want to PROTECT This action to only logged in users
      if(context.user) {
        // we want to create a new Recipe in the Database
        const newRecipe = await Recipe.create(recipeName, ingredients, image);

        return newRecipe;
      }
    }
  },
};

module.exports = resolvers;
