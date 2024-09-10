import React, { useState, useEffect } from 'react';

const Header = () => {
  const posts = [
    {
      title: 'Korean BBQ Tacos',
      description: 'A fusion delight combining tender, marinated Korean BBQ beef with fresh slaw, all wrapped in a soft taco shell for a flavorful, satisfying bite.',
      link: 'https://example.com/slide1',
      backgroundImage: './src/assets/slide-1.jpg',
      label: 'fusion',
    },
    {
      title: 'Roasted Chicken',
      description: 'A timeless dish featuring golden, crispy skin and juicy, perfectly seasoned meat, roasted to perfection for a comforting and hearty meal.',
      link: 'https://example.com/slide2',
      backgroundImage: './src/assets/slide-2.jpg',
      label: 'classic',
    },
    {
      title: 'Stir Fry',
      description: 'A vibrant mix of fresh, crisp vegetables tossed in a savory sauce, offering a quick, healthy, and delicious meal full of texture and flavor.',
      link: 'https://example.com/slide3',
      backgroundImage: './src/assets/slide-3.jpg',
      label: 'vegetarian',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich, slow-cooked tomato sauce and hearty ground beef, served over perfectly cooked spaghetti for a comforting, filling dinner.',
      link: 'https://example.com/slide4',
      backgroundImage: './src/assets/slide-4.jpeg',
      label: 'pasta',
    },
    {
      title: 'Chocolate Ganache',
      description: 'A decadent dessert made from velvety smooth chocolate and cream, perfect for glazing cakes, filling pastries, or enjoying on its own for a rich, indulgent treat.',
      link: 'https://example.com/slide5',
      backgroundImage: './src/assets/slide-5.jpg',
      label: 'cake',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex) => {
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.description;
    document.querySelector('.headerbtn').href = slide.link;
    document.querySelector('.headerimg').style.backgroundImage = `url(${slide.backgroundImage})`;
  };

  const headerPostsCards = () => {
    const headerPosts = document.querySelector('.headercards');
    headerPosts.innerHTML = ''; 

    for (let i = currentSlide; i < currentSlide + 6; i++) {
      const post = posts[i % posts.length];
      const postElement = document.createElement('a');
      postElement.classList.add('headercard', 'flex');
      postElement.href = post.link;
      postElement.innerHTML = `
        <img src="${post.backgroundImage}" alt="">
        <div class="hcardinfo">
          <span>${post.label}</span>
          <h3>${post.title}</h3>
        </div>
      `;
      headerPosts.appendChild(postElement);
    }
  };

  useEffect(() => {
    headerPostsCards();
    showSlide(currentSlide);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleLeftClick = () => {
    setCurrentSlide((currentSlide - 6 + posts.length) % posts.length);
  };

  const handleRightClick = () => {
    setCurrentSlide((currentSlide + 6) % posts.length);
  };

  return (
    <section>
      <div className="headerimg">
        <div className="container">
          <div className="headerinfo flex">
            <h1 className="headertitle">Korean BBQ Tacos</h1>
            <p className="headerpera">
              A fusion of Korean and Mexican flavors, featuring tender Korean BBQ beef, pickled
              vegetables, and spicy gochujang sauce in a soft tortilla. Perfect for adventurous
              eaters seeking bold, international tastes.
            </p>
            <a href="" className="headerbtn">
              VIEW RECIPE <i className="fa-solid fa-arrow-right"></i>
            </a>
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
        </div>
      </section>
    </section>
  );
};

export default Header;
