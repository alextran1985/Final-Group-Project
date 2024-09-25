import React from "react";
import "./Main.css";

const Main = () => {
  const featuredRecipes = [
    {
      title: "Moussaka",
      description:
        "Moussaka is a classic Greek dish made with layers of eggplant, ground meat, and a creamy béchamel sauce, baked to golden perfection.",
      image: "/src/assets/article-1.jpg",
      author: {
        name: (
          <>
            Felipe1995c<span>&nbsp;&nbsp;</span>
          </>
        ),
        recipes: "33 Recipes",
      },
      rating: 5,
      difficulty: "Beginner",
      link: "/recipes/7",
    },
    {
      title: "Bibimabop",
      description:
        "Bibimbap is a colorful Korean rice bowl topped with vegetables, meat, a fried egg, and spicy gochujang, mixed together before eating.",
      image: "/src/assets/article-2.jpg",
      author: {
        name: "CloudofAlemar",
        recipes: "15 Recipes",
      },
      rating: 3,
      difficulty: "Intermediate",
      link: "/recipes/3",
    },
    {
      title: "Biryani",
      description:
        "Biryani is a fragrant South Asian rice dish layered with marinated meat and aromatic spices, slow-cooked to bring out rich flavors.",
      image: "/src/assets/article-3.jpg",
      author: {
        name: (
          <>
            alextran1985<span>&nbsp;</span>
          </>
        ),
        recipes: "23 Recipes",
      },
      rating: 3,
      difficulty: "Advanced",
      link: "/recipes/4",
    },
  ];

  // Three Cards Data
  const threeCards = [
    {
      title: "Confit Byaldi",
      category: "French",
      image: "/src/assets/video-1.jpg",
      time: "15 Mins",
      likes: "60",
      link: "/recipes/5",
      rating: 5,
    },
    {
      title: "Gumbo",
      category: "American",
      image: "/src/assets/video-2.jpg",
      time: "8 Mins",
      likes: "37",
      link: "/recipes/6",
      rating: 3,
    },
    {
      title: "Omurice",
      category: "Japanese",
      image: "/src/assets/video-3.jpg",
      time: "5 Mins",
      likes: "91",
      link: "/recipes/8",
      rating: 3,
    },
  ];

  const worlds = [
    {
      title: "More Recipes!",
      category: "Read More!",
      image: "/src/assets/greens.png",
    },
    {
      title: "More Videos!",
      category: "Watch More!",
      image: "/src/assets/fruit.png",
    },
  ];

  // Helper function to render star ratings
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <span className="fa fa-star checked" key={i}></span>
        ) : (
          <span className="fa fa-star" key={i}></span>
        )
      );
    }
    return stars;
  };

  return (
    <div>
      <section className="featuredrecipe container flex">
        <div className="featuredtitles flex">
          <div className="titleicon">
            <img src="../../src/assets/chef.png" alt="Chef Icon" />
          </div>
          <h1>Anyone Can Cook!</h1>
          <p>
            Cooking is for everyone! With simple, step-by-step recipes, anyone
            can unlock their inner chef and create delicious meals with ease.
            Let's make cooking fun and approachable for all!
          </p>
        </div>
        <div className="featuredcards">
          {featuredRecipes.map((recipe, index) => (
            <div className="fcard" key={index}>
              <div className="fcardimg">
                <img src={recipe.image} alt={recipe.title} />
                <div className="fauthorname flex">
                  <img src="../../src/assets/user.png" alt="User" />
                  <div className="fauth">
                    <h5>{recipe.author.name}</h5>
                    <p>{recipe.author.recipes}</p>
                  </div>
                </div>
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="fcardinfo flex">
                <div className="star-rating">{renderStars(recipe.rating)}</div>
                <label>{recipe.difficulty}</label>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <a href={recipe.link} className="fcardbtn">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="threecards container">
        {threeCards.map((card, index) => (
          <div className="tcard" key={index}>
            <div className="tcardimg">
              <img src={card.image} alt={card.title} />
              <span className="fa fa-star"></span>
            </div>
            <div className="tcardinfo flex">
              <label className="tlabel">{card.category}</label>
              <h2>{card.title}</h2>
              <div className="star-rating">{renderStars(card.rating)}</div>
              <p>{card.description}</p>
              <ul className="flex">
                <li>
                  <i className="fa-solid fa-user"></i> by
                </li>
                <li>
                  <i className="fa-regular fa-clock"></i> {card.time}
                </li>
                <li>
                  <i className="fa-regular fa-heart"></i> {card.likes} Like
                </li>
              </ul>
              <a href={card.link} className="tcardbtn">
                Play Now
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="gfbg">
        <div className="container">
          <div className="greenworld flex">
            <img src={worlds[0].image} alt={worlds[0].title} />
            <div className="gfinfo">
              <button>{worlds[0].category}</button>
              <h1>{worlds[0].title}</h1>
              <p>{worlds[0].description}</p>
            </div>
          </div>
          <div className="fruitworld flex">
            <img src={worlds[1].image} alt={worlds[1].title} />
            <div className="gfinfo">
              <button>{worlds[1].category}</button>
              <h1>{worlds[1].title}</h1>
              <p>{worlds[1].description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
