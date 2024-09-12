import React from "react";
import GumboImage from "../assets/video-2.jpg"; // Replace with the path to your image
import "../pages/recipes.css"; // Optional: Link to your CSS file for styling

const Gumbo = () => {
  const recipe = {
    title: "Gumbo",
    description:
      "A rich and flavorful Southern stew made with a dark roux, vegetables, and a combination of seafood, sausage, or chicken, served over rice for a hearty meal.",
    duration: "2 hours",
    cost: "$15 - $20",
    image: GumboImage,
    ingredients: [
      "1/2 cup vegetable oil",
      "1/2 cup all-purpose flour",
      "1 green bell pepper, diced",
      "1 onion, diced",
      "3 celery stalks, diced",
      "4 cloves garlic, minced",
      "1 pound smoked sausage, sliced",
      "1 pound chicken thighs, boneless and skinless, cut into chunks",
      "1 pound shrimp, peeled and deveined",
      "4 cups chicken broth",
      "2 cups water",
      "1 can diced tomatoes (14 oz)",
      "2 tablespoons Cajun seasoning",
      "1 teaspoon dried thyme",
      "2 bay leaves",
      "Salt and pepper to taste",
      "Cooked white rice for serving",
      "Green onions and parsley for garnish"
    ],
    directions: [
      "1. In a large pot, make a roux by whisking the vegetable oil and flour over medium heat. Continue whisking constantly for about 20-30 minutes, until the roux turns a deep brown color.",
      "2. Add the diced bell pepper, onion, celery, and garlic to the roux. Cook for 5-7 minutes, stirring occasionally, until the vegetables are softened.",
      "3. Stir in the sliced sausage and chicken, cooking for 5-7 minutes until browned.",
      "4. Add the chicken broth, water, diced tomatoes, Cajun seasoning, thyme, bay leaves, salt, and pepper. Bring to a simmer and cook for 45 minutes, stirring occasionally.",
      "5. Add the shrimp to the pot and cook for an additional 10 minutes, or until the shrimp are cooked through.",
      "6. Serve the gumbo hot over cooked white rice, and garnish with chopped green onions and parsley."
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

export default Gumbo;