import React from "react";
import StirFryImage from "../assets/slide-3.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const StirFry = () => {
  const recipe = {
    title: "Stir Fry",
    description:
      "A vibrant mix of fresh, crisp vegetables tossed in a savory sauce, offering a quick, healthy, and delicious meal full of texture and flavor.",
    duration: "20 minutes",
    cost: "$8 - $10",
    image: StirFryImage,
    ingredients: [
      "1 tablespoon oil (vegetable or sesame)",
      "1 bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, thinly sliced",
      "1/2 onion, sliced",
      "Optional protein: 200g chicken, beef, tofu, or shrimp",
      "2 cloves garlic, minced",
      "1 teaspoon fresh ginger, minced",
      "2 tablespoons soy sauce",
      "1 teaspoon sesame oil",
      "Chili flakes (optional, for spice)",
      "Cooked rice or noodles (for serving)",
      "Sesame seeds or chopped green onions (for garnish)"
    ],
    directions: [
      "1. Heat a tablespoon of oil in a large pan or wok over medium-high heat.",
      "2. Add sliced vegetables of your choice (e.g., bell peppers, broccoli, carrots, onions) and stir-fry for 3-4 minutes until they begin to soften.",
      "3. If desired, add a protein like chicken, beef, tofu, or shrimp and cook until fully cooked through.",
      "4. Stir in minced garlic, ginger, and any desired seasonings like soy sauce, sesame oil, or chili flakes.",
      "5. Continue stir-frying for an additional 2-3 minutes, ensuring everything is coated in the sauce and cooked to your liking.",
      "6. Serve hot over rice or noodles, garnishing with sesame seeds or chopped green onions if desired.",
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

export default StirFry;