const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
