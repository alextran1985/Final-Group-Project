import React from "react";
import BibimbapImage from "../assets/article-2.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const Bibimbap = () => {
  const recipe = {
    title: "Bibimbap",
    description:
      "Bibimbap is a colorful Korean rice bowl topped with vegetables, meat, a fried egg, and spicy gochujang, mixed together before eating.",
    duration: "45 minutes",
    cost: "$12 - $15",
    image: BibimbapImage,
    ingredients: [
      "2 cups cooked white rice",
      "200g ground beef or sliced beef (like bulgogi)",
      "1 tablespoon soy sauce",
      "1 tablespoon sesame oil",
      "1 tablespoon sugar",
      "2 cloves garlic, minced",
      "1 cup spinach, blanched",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "1 cup bean sprouts, blanched",
      "4 fried eggs",
      "Kimchi (optional)",
      "1 tablespoon sesame seeds",
      "2 tablespoons gochujang (Korean chili paste)",
      "1 teaspoon rice vinegar",
      "1 teaspoon sugar (for gochujang sauce)"
    ],
    directions: [
      "1. In a bowl, mix the ground beef with soy sauce, sesame oil, sugar, and minced garlic. Let it marinate for 15 minutes.",
      "2. Heat a pan over medium heat and cook the marinated beef until browned. Set aside.",
      "3. In the same pan, lightly sauté the julienned carrots and zucchini until just tender. Set aside each vegetable separately.",
      "4. Blanch the spinach and bean sprouts in boiling water for 1-2 minutes, then drain and season lightly with salt and sesame oil.",
      "5. Fry the eggs in a pan, sunny side up, until the whites are set and the yolks are still runny.",
      "6. Prepare the gochujang sauce by mixing gochujang, rice vinegar, and sugar in a small bowl.",
      "7. To assemble, place a serving of cooked rice in each bowl. Arrange the cooked vegetables, beef, and kimchi (if using) on top in sections. Place a fried egg in the center.",
      "8. Drizzle with gochujang sauce, sprinkle with sesame seeds, and mix everything together before eating."
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

export default Bibimbap;