import React from "react";
import KoreanBBQTacoImage from "../images/korean-bbq-tacos.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const KbbqTacos = () => {
  const recipe = {
    title: "Korean BBQ Tacos",
    description:
      "A fusion delight combining tender, marinated Korean BBQ beef with fresh slaw, all wrapped in a soft taco shell for a flavorful, satisfying bite.",
    duration: "45 minutes",
    cost: "$12 - $15",
    image: KoreanBBQTacoImage,
    ingredients: [
      "1 lb thinly sliced beef (e.g., ribeye or sirloin)",
      "1/4 cup soy sauce",
      "2 tbsp sugar",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "2 green onions, chopped",
      "1/2 head of shredded cabbage",
      "1 carrot, shredded",
      "1 tbsp rice vinegar",
      "Soft taco shells",
      "Sriracha mayo",
      "Sesame seeds (for garnish)",
      "Chopped cilantro (for garnish)",
    ],
    directions: [
      "1. In a bowl, combine soy sauce, sugar, sesame oil, garlic, and green onions to make the marinade.",
      "2. Add thinly sliced beef to the marinade and let it sit for at least 30 minutes (or overnight for better flavor).",
      "3. Heat a skillet or grill on high and cook the marinated beef until fully cooked and slightly charred.",
      "4. In a separate bowl, mix together shredded cabbage, carrots, and a tablespoon of rice vinegar to create a fresh slaw.",
      "5. Warm the soft taco shells in a dry pan.",
      "6. Assemble the tacos: place the cooked beef on the taco shell, add slaw on top, and drizzle with sriracha mayo.",
      "7. Garnish with sesame seeds and chopped cilantro, and enjoy your Korean BBQ Tacos!"
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

export default KbbqTacos;