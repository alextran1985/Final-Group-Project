import React from "react";
import BiryaniImage from "../assets/article-3.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const Biryani = () => {
  const recipe = {
    title: "Biryani",
    description:
      "Biryani is a fragrant South Asian rice dish layered with marinated meat and aromatic spices, slow-cooked to bring out rich flavors.",
    duration: "2 hours",
    cost: "$15 - $20",
    image: BiryaniImage,
    ingredients: [
      "2 cups basmati rice, rinsed and soaked",
      "500g chicken or lamb, cut into pieces",
      "1 cup yogurt",
      "2 onions, thinly sliced",
      "4 tomatoes, chopped",
      "1/4 cup cooking oil or ghee",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 bay leaf",
      "4 cloves",
      "4 green cardamom pods",
      "1 cinnamon stick",
      "1 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "1 teaspoon garam masala",
      "1/2 teaspoon saffron threads, soaked in warm milk",
      "Fresh cilantro and mint leaves, chopped",
      "Salt to taste",
      "Water as needed",
      "Fried onions and boiled eggs for garnish (optional)"
    ],
    directions: [
      "1. Marinate the chicken or lamb with yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, and salt. Let it marinate for at least 1 hour or overnight for better flavor.",
      "2. In a large pot, heat the oil or ghee over medium heat. Add cumin seeds, bay leaf, cloves, cardamom, and cinnamon stick, and sauté until fragrant.",
      "3. Add the sliced onions and cook until golden brown, then stir in the chopped tomatoes and cook until they soften.",
      "4. Add the marinated meat to the pot and cook until the meat is browned and the sauce thickens.",
      "5. In a separate pot, bring water to a boil with a pinch of salt. Add the soaked rice and cook until it’s 70% done, then drain.",
      "6. Layer the partially cooked rice over the meat mixture in the pot. Drizzle the saffron milk over the rice, along with chopped cilantro and mint leaves.",
      "7. Cover the pot with a tight-fitting lid and cook on low heat for 30-40 minutes, allowing the rice to steam and the flavors to meld.",
      "8. Once cooked, gently fluff the rice and meat layers together. Garnish with fried onions and boiled eggs, if desired, and serve hot."
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

export default Biryani;