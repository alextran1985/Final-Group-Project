import React from "react";
import "../../index.css";
// import ProfileRecipe from "./ProfileRecipe";s

function Profile() {
  return (
    <section className="profile-section">
      <div className="profile-section-container">
        {/* Recipe Create Area */}
        <div className="recipe-create-area">
          {/* Profile Heading */}
          <h2 className="profile-heading">Profile: (User)</h2>

          {/* New Recipe Button */}
          <button className="new-recipe-btn">New Recipe</button>

          {/* Create Recipe Form */}
          <form action="" className="create-recipe-form">
            {/* Recipe Title */}
            <input
              type="text"
              name="recipeTitle"
              className="recipe-title recipe-form-input"
              placeholder="Title"
            />

            {/* Recipe Description */}
            <textarea
              name="recipeDescription"
              rows="3"
              className="recipe-description recipe-form-input"
              placeholder="Description"
            ></textarea>

            {/* Recipe Duration */}
            <div className="duration-input-area">
              <label
                htmlFor="recipe-hour-input"
                className="duration-title recipe-input-title"
              >
                Cook Duration
              </label>
              <div className="duration-input-wrapper">
                <div className="hour-area">
                  <input
                    type="number"
                    name="recipeHour"
                    id="recipe-hour-input"
                    className="recipe-hour-input recipe-form-input"
                    placeholder="00"
                  />
                </div>
                <div className="minute-area">
                  <input
                    type="number"
                    name="recipeMinute"
                    id="recipe-minute-input"
                    className="recipe-minute-input recipe-form-input"
                    placeholder="00"
                  />
                </div>
              </div>
            </div>

            {/* Recipe Cost */}
            <div className="cost-input-area">
              <label
                htmlFor="recipe-dollar-input"
                className="cost-title recipe-input-title"
              >
                Estimated Cost
              </label>
              <div className="cost-input-wrapper">
                <div className="dollar-area">
                  <input
                    type="number"
                    name="recipeDollar"
                    id="recipe-dollar-input"
                    className="recipe-dollar-input recipe-form-input"
                    placeholder="00"
                  />
                </div>
                <div className="cent-area">
                  <input
                    type="number"
                    name="recipeCent"
                    id="recipe-cent-input"
                    className="recipe-cent-input recipe-form-input"
                    placeholder="00"
                  />
                </div>
              </div>
            </div>

            {/* Recipe Ingredients */}
            <div className="ingredients-area">
              <label
                htmlFor="recipe-ingredient"
                className="ingredient-title recipe-input-title"
              >
                Ingredients
              </label>
              <div className="ingredient-inputs">
                <input
                  type="text"
                  name="recipeIngredient1"
                  id="recipe-ingredient"
                  className="recipe-ingredient recipe-form-input"
                  placeholder="Ingredient 1"
                />
              </div>
              <button type="button" className="add-ingredient-btn">
                Add Ingredient
              </button>
            </div>

            {/* Recipe Directions */}
            <div className="directions-area">
              <label
                htmlFor="recipe-direction"
                className="directions-title recipe-input-title"
              >
                Directions
              </label>
              <div className="direction-inputs">
                <input
                  type="text"
                  name="recipeDirection1"
                  id="recipe-direction"
                  className="recipe-direction recipe-form-input"
                  placeholder="Step 1"
                />
              </div>
              <button type="button" className="add-direction-step-btn">
                Add Step
              </button>
            </div>

            {/* Create Recipe Button */}
            <button type="submit" className="create-recipe-btn">
              Create Recipe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
