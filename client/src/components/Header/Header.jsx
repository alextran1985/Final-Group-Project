import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const recipes = [
    {
      id: "2",
      title: "Korean BBQ Tacos",
      description:
        "A fusion delight combining tender, marinated Korean BBQ beef with fresh slaw, all wrapped in a soft taco shell for a flavorful, satisfying bite.",
      link: "/recipes/2",
      backgroundImage: "./src/assets/slide-1.jpg",
      label: "fusion",
    },
    {
      id: "9",
      title: "Roasted Chicken",
      description:
        "A timeless dish featuring golden, crispy skin and juicy, perfectly seasoned meat, roasted to perfection for a comforting and hearty meal.",
      link: "/recipes/10",
      backgroundImage: "./src/assets/slide-2.jpg",
      label: "classic",
    },
    {
      id: "11",
      title: "Stir Fry",
      description:
        "A vibrant mix of fresh, crisp vegetables tossed in a savory sauce, offering a quick, healthy, and delicious meal full of texture and flavor.",
      link: "/recipes/12",
      backgroundImage: "./src/assets/slide-3.jpg",
      label: "vegetarian",
    },
    {
      id: "10",
      title: "Spaghetti Bolognese",
      description:
        "A classic Italian pasta dish with rich, slow-cooked tomato sauce and hearty ground beef, served over perfectly cooked spaghetti for a comforting, filling dinner.",
      link: "/recipes/11",
      backgroundImage: "./src/assets/slide-4.jpeg",
      label: "pasta",
    },
    {
      id: "1",
      title: "Chocolate Ganache",
      description:
        "A decadent dessert made from velvety smooth chocolate and cream, perfect for glazing cakes, filling pastries, or enjoying on its own for a rich, indulgent treat.",
      link: "/recipes/1",
      backgroundImage: "./src/assets/slide-5.jpg",
      label: "cake",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex) => {
    const slide = recipes[slideIndex];
    document.querySelector(".headertitle").textContent = slide.title;
    document.querySelector(".headerpera").textContent = slide.description;
    document.querySelector(".headerbtn").href = slide.link;
    document.querySelector(
      ".headerimg"
    ).style.backgroundImage = `url(${slide.backgroundImage})`;
  };

  const headerRecipesCards = () => {
    const headerRecipes = document.querySelector(".headercards");
    headerRecipes.innerHTML = "";

    for (let i = currentSlide; i < currentSlide + 6; i++) {
      const recipe = recipes[i % recipes.length];
      const recipeElement = document.createElement("a");
      recipeElement.classList.add("headercard", "flex");
      recipeElement.href = recipe.link;
      recipeElement.innerHTML = `
        <img src="${recipe.backgroundImage}" alt="">
        <div class="hcardinfo">
          <span>${recipe.label}</span>
          <h3>${recipe.title}</h3>
        </div>
      `;
      headerRecipes.appendChild(recipeElement);
    }
  };

  useEffect(() => {
    headerRecipesCards();
    showSlide(currentSlide);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % recipes.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleLeftClick = () => {
    setCurrentSlide((currentSlide - 6 + recipes.length) % recipes.length);
  };

  const handleRightClick = () => {
    setCurrentSlide((currentSlide + 6) % recipes.length);
  };

  return (
    <section>
      <div className="headerimg">
        <div className="container">
          <div className="headerinfo flex">
            <h1 className="headertitle">Korean BBQ Tacos</h1>
            <p className="headerpera">
              A fusion of Korean and Mexican flavors, featuring tender Korean
              BBQ beef, pickled vegetables, and spicy gochujang sauce in a soft
              tortilla. Perfect for adventurous eaters seeking bold,
              international tastes.
            </p>
            <Link to={recipes[currentSlide].link} className="headerbtn">
              VIEW RECIPE <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <section className="headerslider container">
        <div className="slidertitle flex">
          <h4>Our Latest Recipes</h4>
          <div className="sliderlfbtn">
            <button id="sleft" onClick={handleLeftClick}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button id="sright" onClick={handleRightClick}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="headercards flex">
          {recipes.map((recipe, index) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={index}
              className="headercard flex"
            >
              <img src={recipe.backgroundImage} alt={recipe.title} />
              <div className="hcardinfo">
                <span>{recipe.label}</span>
                <h3>{recipe.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Header;
