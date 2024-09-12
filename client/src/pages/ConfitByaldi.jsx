import React from "react";
import ConfitByaldiImage from "../assets/video-1.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const ConfitByaldi = () => {
  const recipe = {
    title: "Confit Byaldi",
    description:
      "Confit Byaldi is a refined version of ratatouille, featuring thinly sliced vegetables layered and slow-cooked to perfection in a rich, aromatic tomato sauce.",
    duration: "2 hours 30 minutes",
    cost: "$12 - $15",
    image: ConfitByaldiImage,
    ingredients: [
      "2 eggplants, thinly sliced",
      "2 zucchinis, thinly sliced",
      "2 yellow squash, thinly sliced",
      "4 Roma tomatoes, thinly sliced",
      "1 red bell pepper, thinly sliced",
      "1 yellow bell pepper, thinly sliced",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 onion, finely chopped",
      "1 can crushed tomatoes (14 oz)",
      "1 tablespoon tomato paste",
      "1 teaspoon fresh thyme leaves",
      "Fresh basil leaves for garnish",
      "Salt and pepper to taste"
    ],
    directions: [
      "1. Preheat your oven to 275°F (135°C).",
      "2. In a large pan, heat olive oil over medium heat. Add the chopped onions and cook until softened, about 5 minutes.",
      "3. Stir in the garlic, tomato paste, crushed tomatoes, and fresh thyme. Simmer the sauce for 10 minutes, then season with salt and pepper.",
      "4. Spread the tomato sauce evenly across the bottom of a baking dish.",
      "5. Arrange alternating slices of eggplant, zucchini, yellow squash, Roma tomatoes, red bell pepper, and yellow bell pepper in concentric circles or a straight line over the sauce. Slightly overlap the slices.",
      "6. Drizzle the sliced vegetables with olive oil and season with salt and pepper.",
      "7. Cover the dish with parchment paper, cut to fit, and bake for 2 hours, until the vegetables are tender and lightly browned.",
      "8. For extra color, increase the oven temperature to 400°F (200°C) for the last 10-15 minutes of baking.",
      "9. Garnish with fresh basil leaves before serving. Serve hot as a main or side dish."
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

export default ConfitByaldi;