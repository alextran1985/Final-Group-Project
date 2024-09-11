import React from "react";
import SpaghettiBologneseImage from "../images/spaghetti-bolognese.jpg"; // Replace with the path to your image
import "../Styles/Recipe.css"; // Optional: Link to your CSS file for styling

const SpaghettiBolognese = () => {
  const recipe = {
    title: "Spaghetti Bolognese",
    description:
      "A classic Italian pasta dish with rich, slow-cooked tomato sauce and hearty ground beef, served over perfectly cooked spaghetti for a comforting, filling dinner.",
    duration: "1 hour 30 minutes",
    cost: "$12 - $15",
    image: SpaghettiBologneseImage,
    ingredients: [
      "1 tablespoon olive oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 carrot, finely diced",
      "500g ground beef",
      "800g crushed tomatoes (or tomato sauce)",
      "2 tablespoons tomato paste",
      "1/4 cup red wine or beef broth (optional)",
      "Salt and pepper, to taste",
      "1 teaspoon Italian herbs (oregano, basil, thyme)",
      "400g spaghetti",
      "Grated Parmesan cheese (for garnish)",
      "Fresh basil leaves (optional, for garnish)"
    ],
    directions: [
      "1. Heat a tablespoon of olive oil in a large pan over medium heat.",
      "2. Add diced onions, garlic, and carrots, sautéing until softened, about 5 minutes.",
      "3. Stir in ground beef and cook until browned, breaking it up with a spoon.",
      "4. Pour in crushed tomatoes, tomato paste, and a splash of red wine or beef broth, and season with salt, pepper, and Italian herbs.",
      "5. Reduce heat to low, cover, and let the sauce simmer for at least an hour to develop the flavors.",
      "6. While the sauce simmers, cook spaghetti according to package instructions until al dente.",
      "7. Serve the sauce over the cooked spaghetti, garnishing with grated Parmesan and fresh basil if desired.",
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

export default SpaghettiBolognese;