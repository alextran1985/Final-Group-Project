const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  cost: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  directions: [
    {
      type: String,
      required: true,
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
