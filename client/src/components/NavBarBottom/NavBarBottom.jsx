import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../utils/auth";

const NavBarBottom = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState(1);

  const [isNavlistVisible, setIsNavlistVisible] = useState(false);
  const [navlistMaxHeight, setNavlistMaxHeight] = useState("0px");
  const navlistRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

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

  useEffect(() => {});

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleBurgerClick = function (event) {
    if (!isNavlistVisible) {
      const scrollHeight = navlistRef.current.scrollHeight;
      setNavlistMaxHeight(`${scrollHeight}px`);
      setIsNavlistVisible(!isNavlistVisible);
    } else {
      setNavlistMaxHeight("0px");
      setIsNavlistVisible(!isNavlistVisible);
    }
  };

  const handleNavlistLinkClick = function (event) {
    setNavlistMaxHeight("0px");
    setIsNavlistVisible(!isNavlistVisible);
  };

  console.log(randomRecipe);

  return (
    <nav className="mainnav">
      <div className="container flex">
        <div className="logo flex">
          <img src="../../src/assets/logo.png" alt="Logo" />
          <h1>The Cooking Pot</h1>
        </div>
        <i
          className="fa-solid fa-burger burger"
          onClick={handleBurgerClick}
        ></i>
        <ul
          ref={navlistRef}
          className="navlist"
          style={{ maxHeight: navlistMaxHeight }}
        >
          <li>
            <Link to="/" onClick={handleNavlistLinkClick}>
              <i className="fa-solid fa-house navlist-icon"></i>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/recipes/${randomRecipe}`}
              onClick={handleNavlistLinkClick}
            >
              <i className="fa-solid fa-book navlist-icon"></i>
              Recipes
            </Link>
          </li>
          {Auth.loggedIn() && (
            <li>
              <Link to="/profile" onClick={handleNavlistLinkClick}>
                <i className="fa-solid fa-user navlist-icon"></i>
                Profile
              </Link>
            </li>
          )}
          <li>
            <a href="/" onClick={handleNavlistLinkClick}>
              <i className="fa-solid fa-video navlist-icon"></i>
              Videos
            </a>
          </li>
          <li>
            <a href="/" onClick={handleNavlistLinkClick}>
              <i className="fa-solid fa-circle-question navlist-icon"></i>
              Help
            </a>
          </li>
        </ul>
        {/* <div className="searchbar flex">
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
        )} */}
      </div>
    </nav>
  );
};

export default NavBarBottom;
