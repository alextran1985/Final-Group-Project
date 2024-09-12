import React, { useState, useEffect } from 'react';

const NavBarBottom = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainnav = document.querySelector('.mainnav');
      if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
      } else {
        mainnav.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="mainnav">
      <div className="container flex">
        <div className="logo flex">
          <img src="./src/assets/logo.png" alt="Logo" />
          <h1>The Cooking Pot</h1>
        </div>
        <ul className="navlist flex" style={{ right: isNavOpen ? '0' : '-100%' }}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Recipes</a></li>
          <li><a href="/">Blogs</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Help</a></li>
        </ul>
        <div className="searchbar flex">
          <input type="checkbox" name="check-toggle" id="checkbox" hidden />
          <i className="fa-solid fa-magnifying-glass" id="searchopen" onClick={toggleSearch}></i>
        </div>

        {isSearchVisible && (
          <div className="searchinput">
            <input type="text" placeholder="Search Here..." />
            <i className="fa-solid fa-xmark" id="removesearch" onClick={toggleSearch}></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarBottom;
