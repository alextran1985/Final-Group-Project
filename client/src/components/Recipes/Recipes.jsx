import React from 'react';
import NewRecipe from '../../pages/NewRecipe';
import RecipesComponent from "../../pages/RecipesComponent";

function Recipes() {
  return (
    <>
        <div>Recipes</div>
        <RecipesComponent />
        <NewRecipe />
    </>
  )
}

export default Recipes