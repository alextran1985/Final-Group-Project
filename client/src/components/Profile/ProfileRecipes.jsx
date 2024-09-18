import React from "react";
import "../../index.css";

function ProfileRecipes({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes available</p>;
  }
  return (
    <div className="pr-recipe-cards-container">
      {recipes.map((recipe, index) => (
        <div className="pr-recipe-card" key={index}>
          <h3 className="pr-recipe-title">{recipe.title}</h3>
          <p className="pr-recipe-description">{recipe.description}</p>
          <p className="pr-recipe-duration">
            Estimated Cook Time: {recipe.duration}
          </p>
          <p className="pr-recipe-cost">Estimated Cost: {recipe.cost}</p>
          <h4 className="pr-ingredient-title">Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="pr-direction-title">Directions</h4>
          <ul>
            {recipe.directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProfileRecipes;
