import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBarBottom = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState(1);

  useEffect(() => {
    const randomRecipeId = Math.floor(Math.random() * 11) + 1;
    setRandomRecipe(randomRecipeId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mainnav = document.querySelector(".mainnav");
      if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add("sticky");
      } else {
        mainnav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  console.log(randomRecipe);
  return (
    <nav className="mainnav">
      <div className="container flex">
        <div className="logo flex">
          <img src="../../assets/logo.png" alt="Logo" />
          <h1>The Cooking Pot</h1>
        </div>
        <ul
          className="navlist flex"
          style={{ right: isNavOpen ? "0" : "-100%" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/recipes/${randomRecipe}`}>Recipes</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <a href="/">Videos</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
        <div className="searchbar flex">
          <input type="checkbox" name="check-toggle" id="checkbox" hidden />
          <i
            className="fa-solid fa-magnifying-glass"
            id="searchopen"
            onClick={toggleSearch}
          ></i>
        </div>

        {isSearchVisible && (
          <div className="searchinput">
            <input type="text" placeholder="Search Here..." />
            <i
              className="fa-solid fa-xmark"
              id="removesearch"
              onClick={toggleSearch}
            ></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarBottom;
