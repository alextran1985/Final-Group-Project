import React from "react";
import ChocolateGanacheImage from "../assets/slide-5.jpg"; // Replace with the path to your image
import "../Styles/Recipe.css"; // Optional: Link to your CSS file for styling

const ChocolateGanache = () => {
  const recipe = {
    title: "Chocolate Ganache",
    description:
      "A decadent dessert made from velvety smooth chocolate and cream, perfect for glazing cakes, filling pastries, or enjoying on its own for a rich, indulgent treat.",
    duration: "15 minutes",
    cost: "$8 - $10",
    image: ChocolateGanacheImage,
    ingredients: [
      "1 cup (240ml) heavy cream",
      "8 oz (226g) semi-sweet or dark chocolate, chopped",
    ],
    directions: [
      "1. Heat heavy cream in a small saucepan over medium heat until it begins to simmer, but not boil.",
      "2. Remove from heat and pour the hot cream over chopped semi-sweet or dark chocolate in a heatproof bowl.",
      "3. Let the mixture sit for a few minutes, then whisk gently until the chocolate is fully melted and the mixture is smooth and glossy.",
      "4. Allow the ganache to cool slightly before using it as a glaze, filling, or frosting.",
      "5. For thicker ganache, let it chill in the refrigerator until it reaches a spreadable consistency.",
      "6. Enjoy on its own or use as a rich topping for cakes, pastries, or cupcakes.",
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

export default ChocolateGanache;