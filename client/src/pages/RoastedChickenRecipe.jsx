import React from "react";
import RoastedChickenImage from "../images/roasted-chicken.jpg"; // Replace with the path to your image
import "../Styles/Recipe.css"; // Optional: Link to your CSS file for styling

const RoastedChickenRecipe = () => {
  const recipe = {
    title: "Roasted Chicken",
    description:
      "A timeless dish featuring golden, crispy skin and juicy, perfectly seasoned meat, roasted to perfection for a comforting and hearty meal.",
    duration: "1 hour 30 minutes",
    cost: "$10 - $12",
    image: RoastedChickenImage,
    ingredients: [
      "1 whole chicken (about 4-5 pounds)",
      "Salt and pepper, to taste",
      "1-2 tablespoons olive oil or melted butter",
      "1 lemon, halved (optional)",
      "Fresh herbs (rosemary, thyme, or parsley, optional)",
      "4 cloves garlic (optional)",
      "1 onion, quartered (optional)",
      "Vegetables for roasting (carrots, potatoes, etc., optional)"
    ],
    directions: [
      "1. Preheat your oven to 425°F (220°C).",
      "2. Rinse the chicken inside and out, then pat it dry with paper towels.",
      "3. Season the chicken generously with salt, pepper, and any desired herbs (like rosemary or thyme).",
      "4. Rub the chicken with olive oil or melted butter to help crisp the skin.",
      "5. Place the chicken breast-side up in a roasting pan or on a baking sheet with a rack.",
      "6. Roast the chicken in the oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured in the thickest part of the thigh.",
      "7. Let the chicken rest for 10-15 minutes before carving to allow the juices to redistribute.",
      "8. Carve and serve with your favorite sides for a delicious, comforting meal."
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

export default RoastedChickenRecipe;