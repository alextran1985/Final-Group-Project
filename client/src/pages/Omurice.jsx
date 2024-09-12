import React from "react";
import OmuriceImage from "../assets/video-3.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const Omurice = () => {
  const recipe = {
    title: "Omurice",
    description:
      "A popular Japanese dish that combines fried rice with a fluffy omelette, often topped with ketchup or a savory sauce for a satisfying, comforting meal.",
    duration: "30 minutes",
    cost: "$5 - $8",
    image: OmuriceImage,
    ingredients: [
      "2 cups cooked rice",
      "2 tablespoons vegetable oil",
      "1/2 onion, finely chopped",
      "1/2 carrot, diced",
      "1/2 cup cooked chicken, diced",
      "2 tablespoons ketchup (plus more for garnish)",
      "1 tablespoon soy sauce",
      "4 large eggs",
      "Salt and pepper to taste",
      "Chopped parsley or green onions for garnish (optional)"
    ],
    directions: [
      "1. Heat 1 tablespoon of vegetable oil in a large pan over medium heat. Add the chopped onion and carrot, sautéing for 3-4 minutes until softened.",
      "2. Stir in the diced chicken and cook for another 2 minutes, just until heated through.",
      "3. Add the cooked rice to the pan, followed by the ketchup and soy sauce. Stir everything together, cooking for another 2-3 minutes until well mixed. Season with salt and pepper to taste.",
      "4. Remove the fried rice from the pan and set it aside. Clean the pan or use a separate one for the eggs.",
      "5. Beat two eggs in a bowl and season with a pinch of salt. Heat 1/2 tablespoon of oil in the pan over medium heat, then pour the eggs in, swirling them around the pan to make a thin, even layer.",
      "6. When the egg is just set but still soft, spoon half of the fried rice into the center. Fold the omelette over the rice, shaping it into a neat package, and slide it onto a plate. Repeat with the remaining eggs and rice.",
      "7. Drizzle ketchup over the top for garnish and serve with chopped parsley or green onions, if desired."
    ],
  };

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description">{recipe.description}</p>
      <div className="recipe-details">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
        />
        <div className="recipe-info">
          <p><strong>Duration:</strong> {recipe.duration}</p>
          <p><strong>Cost to make:</strong> {recipe.cost}</p>
        </div>
      </div>
      <div className="recipe-ingredients">
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-directions">
        <h2>Directions:</h2>
        <ol>
          {recipe.directions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Omurice;