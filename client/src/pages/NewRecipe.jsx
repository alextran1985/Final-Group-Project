import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse';
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { SAVE_RECIPE } from '../utils/mutations';

function NewRecipe() {

    // We need some STATE to save our temp data/dataSet
    // --> [variableData, methodToUpdateData] = useState(initalValue)
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');

    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: '',
        image: '',
        label: '',
        directions: '',
        duration: '',
    })

    const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);
    // We need a method to handle the Input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecipe((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }
    // We need a method to handle the Submission 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Now what do we do with our User data(?)
        // we are sending this data as a MUTATION --> saveRecipe(recipe)
        const { data } = await saveRecipe({
            variables: { ...recipe }
        });
    }

  return (
    <>
        <div>New Recipe</div>
        <form id='new-recipe-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name of Recipe</label>
            <input type="text" id='name' name='title' className='' onChange={handleInputChange}/>
            <label htmlFor="ingredients">List of Ingredients</label>
            <input type="text" id='ingredients' name='ingredients' className='' onChange={handleInputChange}/>
            { /*<input type="text" id='ingredients' name='ingredients' className='' onChange={(event) => setIngredients(event.target.value)}/> */} 
            { /* we may need to find a image uploading library */ }
            <button type="submit">Share Recipe</button>
        </form>
    </>
  )
}

export default NewRecipe