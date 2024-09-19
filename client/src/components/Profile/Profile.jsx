import React, { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import NewRecipe from "../../pages/NewRecipe";
import ProfileRecipes from "./ProfileRecipes";
import "../../index.css";

import { CREATE_RECIPE, EDIT_USER } from "../../utils/mutations";
import { GET_USER_RECIPES, QUERY_CURRENT_USER } from "../../utils/queries";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormState, setEditFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  const [updateUser, { error }] = useMutation(EDIT_USER);

  const [isRecipeFormVisible, setIsRecipeFormVisible] = useState(false);
  const [recipeFormHeight, setRecipeFormHeight] = useState("0px");
  const recipeFormRef = useRef(null);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [recipeImage, setRecipeImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [recipeFormInput, setRecipeFormInput] = useState({
    recipeHour: "00",
    recipeMinute: "00",
    recipeDollar: "00",
    recipeCent: "00",
  });

  const [createRecipe] = useMutation(CREATE_RECIPE);
  const {
    data: getUserRecipesData,
    loading: loadingUserRecipesData,
    error: getRecipesError,
  } = useQuery(GET_USER_RECIPES);

  // console.log("Loading... ", loading);
  // console.log("Fetched Data: ", data);
  // console.log("Error: ", error);
  const user = data?.getCurrent;
  // console.log("User: ", user);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditFormState({
      ...editFormState,
      [name]: value,
    });
  };

  const handleNewRecipeBtnClick = function () {
    if (!isRecipeFormVisible) {
      const scrollHeight = recipeFormRef.current.scrollHeight;
      setRecipeFormHeight(`${scrollHeight}px`);
      setIsRecipeFormVisible(true);
    } else {
      setRecipeFormHeight("0px");
      setIsRecipeFormVisible(false);
    }
  };

  const handleAddIngredient = function () {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = function (index, value) {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleDeleteIngredient = function (index) {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleAddStep = function () {
    setSteps([...steps, ""]);
  };

  const handleStepChange = function (index, value) {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleDeleteStep = function (index) {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleImageUpload = function (event) {
    const file = event.target.files[0];
    setRecipeImage(file);

    // Create a preview of the image
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleRemoveImage = function () {
    setRecipeImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const handleImageLoad = function () {
    if (isRecipeFormVisible) {
      const scrollHeight = recipeFormRef.current.scrollHeight;
      setRecipeFormHeight(`${scrollHeight}px`);
    }
  };

  const handleImageChange = function (event) {
    setRecipeFormInput({
      ...recipeFormInput,
      image: event.target.files[0].name,
    });
  };

  const handleBasicRecipeInputChange = function (event) {
    const { name, value } = event.target;
    setRecipeFormInput({
      ...recipeFormInput,
      [name]: value,
    });
  };

  const handleCreateRecipe = async function (event) {
    event.preventDefault();
    const {
      image,
      recipeTitle,
      recipeDescription,
      recipeHour,
      recipeMinute,
      recipeDollar,
      recipeCent,
    } = recipeFormInput;
    const recipeData = {
      image: image,
      title: recipeTitle,
      description: recipeDescription,
      duration: `${recipeHour} hrs ${recipeMinute} min`,
      cost: `$${recipeDollar}.${recipeCent}`,
      ingredients: [...ingredients],
      directions: [...steps],
    };

    const { data } = await createRecipe({
      variables: { recipeData },
    });

    window.location.assign("/profile");
  };

  useEffect(
    function () {
      if (isRecipeFormVisible) {
        const scrollHeight = recipeFormRef.current.scrollHeight;
        setRecipeFormHeight(`${scrollHeight}px`);
      }
    },
    [ingredients, steps]
  );

  useEffect(() => {
    if (!loadingUserRecipesData && getUserRecipesData) {
      console.log(getUserRecipesData);
    }
  }, [loadingUserRecipesData, getUserRecipesData]);

  const handleEditForm = async (event) => {
    event.preventDefault();
    console.log("Sending Data to Server...");
    const { data } = await updateUser({
      variables: { ...editFormState },
    });
    console.log(updateUser);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to={`/recipes`}>Recipes</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow className="fix">
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                  alt="User Image"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{user?.name}</p>
                <p className="text-muted mb-4">{user?.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={openModal}>Edit Profile</MDBBtn>
                  <MDBBtn outline className="ms-1">
                    <Link to={`/recipes`}>My Recipes</Link>
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true" className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>{user?.name}@github</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>{user?.name}@twitter</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>{user?.name}@instagram</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>{user?.name}@facebook</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* Where you can create new recipe form is going to be */}
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>{/* <NewRecipe /> */}</MDBCardBody>
            </MDBCard>

            <MDBRow>
              {/* where create recipe will go */}
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="/src/assets/article-1.jpg"
                      fluid
                      alt="Create Recipe"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{}Recipe Name</MDBCardTitle>
                    <MDBCardText>Description of recipe goes here</MDBCardText>
                    <MDBBtn href="#">New Recipe</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {/* Where liked recipe will go */}
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="/src/assets/article-2.jpg"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Saved Recipe</MDBCardTitle>
                    <MDBCardText>Description goes here</MDBCardText>
                    <MDBBtn>
                      <Link to={`/recipes`}>View more</Link>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {isModalOpen && (
        <div className="wrapper active-popup">
          <span className="icon-close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </span>

          <div className="form-box register">
            <h2>Update Profile</h2>
            <form onSubmit={handleEditForm}>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid "></i>
                </span>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  onChange={handleEditChange}
                  required
                />
                <label>Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  onChange={handleEditChange}
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  onChange={handleEditChange}
                  required
                />
                <label>Password</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  defaultValue={user.confirmpassword}
                  onChange={handleEditChange}
                  required
                />
                <label>Confirm Password</label>
              </div>
              <button onClick={handleEditChange} type="submit" className="btn">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="profile-section-container">
        {/* Recipe Create Area */}
        <div className="recipe-create-area">
          {/* Profile Heading */}
          <h2 className="profile-heading">Profile: (User)</h2>

          {/* New Recipe Button */}
          <button className="new-recipe-btn" onClick={handleNewRecipeBtnClick}>
            New Recipe
          </button>

          {/* Create Recipe Form */}
          <form
            ref={recipeFormRef}
            action=""
            className="create-recipe-form"
            style={{ maxHeight: recipeFormHeight }}
          >
            {/* Recipe Image Upload */}
            <div className="image-upload-area">
              <label
                htmlFor="recipeImage"
                className="image-upload-title recipe-input-title"
              >
                Recipe Image
              </label>
              <input
                type="file"
                ref={fileInputRef}
                name="recipeImage"
                id="recipeImage"
                accept="image/*"
                className="recipe-image-upload recipe-form-input"
                onChange={(event) => {
                  handleImageUpload(event);
                  handleImageChange(event);
                }}
              />

              {/* Display Image Preview */}
              {imagePreview && (
                <div className="image-preview-area">
                  <p>Image Preview:</p>
                  <img
                    src={imagePreview}
                    onLoad={handleImageLoad}
                    alt="Recipe Preview"
                    className="recipe-image-preview"
                    style={{ width: "100%" }}
                  />

                  {/* Button to Remove Image */}
                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={handleRemoveImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            {/* Recipe Title */}
            <input
              type="text"
              name="recipeTitle"
              className="recipe-title recipe-form-input"
              placeholder="Title"
              onChange={handleBasicRecipeInputChange}
            />

            {/* Recipe Description */}
            <textarea
              name="recipeDescription"
              rows="3"
              className="recipe-description recipe-form-input"
              placeholder="Description"
              onChange={handleBasicRecipeInputChange}
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
                    onChange={handleBasicRecipeInputChange}
                  />
                </div>
                <div className="minute-area">
                  <input
                    type="number"
                    name="recipeMinute"
                    id="recipe-minute-input"
                    className="recipe-minute-input recipe-form-input"
                    placeholder="00"
                    onChange={handleBasicRecipeInputChange}
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
                    onChange={handleBasicRecipeInputChange}
                  />
                </div>
                <div className="cent-area">
                  <input
                    type="number"
                    name="recipeCent"
                    id="recipe-cent-input"
                    className="recipe-cent-input recipe-form-input"
                    placeholder="00"
                    onChange={handleBasicRecipeInputChange}
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
                {ingredients.map((ingredient, index) => (
                  <div className="ingredient-wrapper" key={index}>
                    <input
                      type="text"
                      name={`recipeIngredient${index + 1}`}
                      id="recipe-ingredient"
                      className="recipe-ingredient recipe-form-input"
                      placeholder={`Ingredient ${index + 1}`}
                      value={ingredient}
                      onChange={(e) => {
                        handleIngredientChange(index, e.target.value);
                        handleBasicRecipeInputChange(e);
                      }}
                    />
                    <i
                      className="fa-solid fa-trash-can trash-icon"
                      onClick={() => handleDeleteIngredient(index)}
                    ></i>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="add-ingredient-btn"
                onClick={handleAddIngredient}
              >
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
                {steps.map((step, index) => (
                  <div className="direction-wrapper" key={index}>
                    <input
                      type="text"
                      name={`recipeDirection${index + 1}`}
                      id="recipe-direction"
                      className="recipe-direction recipe-form-input"
                      placeholder={`Step ${index + 1}`}
                      value={step}
                      onChange={(e) => {
                        handleStepChange(index, e.target.value);
                        handleBasicRecipeInputChange(e);
                      }}
                    />
                    <i
                      className="fa-solid fa-trash-can trash-icon"
                      onClick={() => handleDeleteStep(index)}
                    ></i>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="add-direction-step-btn"
                onClick={handleAddStep}
              >
                Add Step
              </button>
            </div>

            {/* Create Recipe Button */}
            <button
              type="submit"
              className="create-recipe-btn"
              onClick={handleCreateRecipe}
            >
              Create Recipe
            </button>
          </form>
        </div>
        <ProfileRecipes recipes={getUserRecipesData?.getUserRecipes} />
      </div>
    </section>
  );
}
