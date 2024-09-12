import React from "react";
import MoussakaImage from "../assets/article-1.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const Moussaka = () => {
  const recipe = {
    title: "Moussaka",
    description:
      "Moussaka is a classic Greek dish made with layers of eggplant, ground meat, and a creamy béchamel sauce, baked to golden perfection.",
    duration: "2 hours",
    cost: "$15 - $18",
    image: MoussakaImage,
    ingredients: [
      "2 large eggplants, sliced into rounds",
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "2 cloves garlic, minced",
      "500g ground beef or lamb",
      "1 can (14 oz) crushed tomatoes",
      "1/2 teaspoon ground cinnamon",
      "1/2 teaspoon ground allspice",
      "Salt and pepper to taste",
      "1 cup grated Parmesan cheese",
      "2 cups whole milk",
      "4 tablespoons butter",
      "4 tablespoons all-purpose flour",
      "1/4 teaspoon ground nutmeg",
      "2 eggs, lightly beaten"
    ],
    directions: [
      "1. Preheat the oven to 375°F (190°C). Lay the eggplant slices on a baking sheet, drizzle with olive oil, and roast for 20 minutes until tender.",
      "2. In a large pan, heat olive oil over medium heat. Add diced onion and garlic, cooking until softened, about 5 minutes.",
      "3. Add ground beef or lamb, cooking until browned. Stir in crushed tomatoes, cinnamon, allspice, salt, and pepper. Simmer for 20 minutes to let the flavors meld.",
      "4. For the béchamel sauce, melt butter in a saucepan over medium heat. Stir in flour and cook for 2 minutes. Gradually whisk in the milk and cook until thickened. Remove from heat, stir in nutmeg, and allow to cool slightly. Whisk in beaten eggs.",
      "5. In a greased baking dish, layer half of the roasted eggplant slices, followed by the meat sauce, then the remaining eggplant slices. Pour the béchamel sauce over the top, spreading it evenly.",
      "6. Sprinkle grated Parmesan cheese over the béchamel. Bake for 45 minutes, or until the top is golden and bubbly.",
      "7. Let the Moussaka cool for 10-15 minutes before serving to allow the layers to set."
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

export default Moussaka;