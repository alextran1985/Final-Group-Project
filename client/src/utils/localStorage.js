export const getSavedRecipesIds = () => {
  const savedRecipesIds = localStorage.getItem('saved_recipes')
    ? JSON.parse(localStorage.getItem('saved_recipes'))
    : [];

  return savedRecipesIds;
};

export const saveRecipesIds = (recipesIdArr) => {
  if (recipesIdArr.length) {
    localStorage.setItem('saved_recipes', JSON.stringify(recipesIdArr));
  } else {
    localStorage.removeItem('saved_recipes');
  }
};

export const removeRecipesId = (recipesId) => {
  const savedRecipesIds = localStorage.getItem('saved_recipes')
    ? JSON.parse(localStorage.getItem('saved_recipes'))
    : null;

  if (!savedRecipesIds) {
    return false;
  }

  const updatedSavedRecipesIds = savedRecipesIds?.filter((savedRecipesId) => savedRecipesId !== recipesId);
  localStorage.setItem('saved_recipes', JSON.stringify(updatedSavedRecipesIds));

  return true;
};
