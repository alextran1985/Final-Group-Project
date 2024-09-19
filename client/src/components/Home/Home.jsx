import React from "react";
// import './Main.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

const Home = () => {
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
      link: "/",
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
      link: "/",
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
      link: "/",
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
      link: "/",
      rating: 5,
    },
    {
      title: "Gumbo",
      category: "American",
      image: "/src/assets/video-2.jpg",
      time: "8 Mins",
      likes: "37",
      link: "/",
      rating: 3,
    },
    {
      title: "Omurice",
      category: "Japanese",
      image: "/src/assets/video-3.jpg",
      time: "5 Mins",
      likes: "91",
      link: "/",
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
      <Header />
      <Main />
    </div>
  );
};

export default Home;
