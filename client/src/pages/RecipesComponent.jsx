import { useState, React } from 'react';
import "../pages/recipes.css";
import ChocolateGanacheImage from "../assets/slide-5.jpg";
import KoreanBBQTacoImage from "../assets/slide-1.jpg";
import BibimbapImage from "../assets/article-2.jpg";
import BiryaniImage from "../assets/article-3.jpg";
import ConfitByaldiImage from "../assets/video-1.jpg";
import GumboImage from "../assets/video-2.jpg";
import MoussakaImage from "../assets/article-1.jpg";
import OmuriceImage from "../assets/video-3.jpg";
import RoastedChickenImage from "../assets/slide-2.jpg";
import SpaghettiBologneseImage from "../assets/slide-4.jpeg";
import StirFryImage from "../assets/slide-3.jpg";

// Sample recipes data
const recipes = [
    {
      title: 'Chocolate Ganache',
      description: 'A decadent dessert made from velvety smooth chocolate and cream, perfect for glazing cakes, filling pastries, or enjoying on its own for a rich, indulgent treat.',
      duration: '15 minutes',
      cost: '$8 - $10',
      image: ChocolateGanacheImage, // Replace with the path to your image
      directions: [
        'Heat heavy cream in a small saucepan over medium heat until it begins to simmer, but not boil.',
        'Remove from heat and pour the hot cream over chopped semi-sweet or dark chocolate in a heatproof bowl.',
        'Let the mixture sit for a few minutes, then whisk gently until the chocolate is fully melted and smooth.',
        'Allow the ganache to cool slightly before using it as a glaze, filling, or frosting.',
      ],
      ingredients: ['1 cup heavy cream', '8 oz semi-sweet or dark chocolate'],
    },
    {
      title: 'Korean BBQ Tacos',
      description: 'A fusion delight combining tender, marinated Korean BBQ beef with fresh slaw, all wrapped in a soft taco shell for a flavorful, satisfying bite.',
      duration: '45 minutes',
      cost: '$12 - $15',
      image: KoreanBBQTacoImage, 
      directions: [
        'Combine soy sauce, sugar, sesame oil, garlic, and green onions to make the marinade.',
        'Add thinly sliced beef and let it marinate for at least 30 minutes.',
        'Cook marinated beef on high heat until fully cooked and slightly charred.',
        'Assemble tacos by adding beef, slaw, and drizzle with sriracha mayo.',
      ],
      ingredients: ['Beef slices', 'Soy sauce', 'Sesame oil', 'Taco shells', 'Slaw'],
    },
    {
        title: "Bibimbap",
        description:
          "Bibimbap is a colorful Korean rice bowl topped with vegetables, meat, a fried egg, and spicy gochujang, mixed together before eating.",
        duration: "45 minutes",
        cost: "$12 - $15",
        image: BibimbapImage,
        ingredients: [
          "2 cups cooked white rice",
          "200g ground beef or sliced beef (like bulgogi)",
          "1 tablespoon soy sauce",
          "1 tablespoon sesame oil",
          "1 tablespoon sugar",
          "2 cloves garlic, minced",
          "1 cup spinach, blanched",
          "1 carrot, julienned",
          "1 zucchini, julienned",
          "1 cup bean sprouts, blanched",
          "4 fried eggs",
          "Kimchi (optional)",
          "1 tablespoon sesame seeds",
          "2 tablespoons gochujang (Korean chili paste)",
          "1 teaspoon rice vinegar",
          "1 teaspoon sugar (for gochujang sauce)"
        ],
        directions: [
          "1. In a bowl, mix the ground beef with soy sauce, sesame oil, sugar, and minced garlic. Let it marinate for 15 minutes.",
          "2. Heat a pan over medium heat and cook the marinated beef until browned. Set aside.",
          "3. In the same pan, lightly sauté the julienned carrots and zucchini until just tender. Set aside each vegetable separately.",
          "4. Blanch the spinach and bean sprouts in boiling water for 1-2 minutes, then drain and season lightly with salt and sesame oil.",
          "5. Fry the eggs in a pan, sunny side up, until the whites are set and the yolks are still runny.",
          "6. Prepare the gochujang sauce by mixing gochujang, rice vinegar, and sugar in a small bowl.",
          "7. To assemble, place a serving of cooked rice in each bowl. Arrange the cooked vegetables, beef, and kimchi (if using) on top in sections. Place a fried egg in the center.",
          "8. Drizzle with gochujang sauce, sprinkle with sesame seeds, and mix everything together before eating."
        ],
    },
    {
        title: "Biryani",
        description:
          "Biryani is a fragrant South Asian rice dish layered with marinated meat and aromatic spices, slow-cooked to bring out rich flavors.",
        duration: "2 hours",
        cost: "$15 - $20",
        image: BiryaniImage,
        ingredients: [
          "2 cups basmati rice, rinsed and soaked",
          "500g chicken or lamb, cut into pieces",
          "1 cup yogurt",
          "2 onions, thinly sliced",
          "4 tomatoes, chopped",
          "1/4 cup cooking oil or ghee",
          "1 tablespoon ginger-garlic paste",
          "1 teaspoon cumin seeds",
          "1 bay leaf",
          "4 cloves",
          "4 green cardamom pods",
          "1 cinnamon stick",
          "1 teaspoon turmeric powder",
          "1 teaspoon red chili powder",
          "1 teaspoon garam masala",
          "1/2 teaspoon saffron threads, soaked in warm milk",
          "Fresh cilantro and mint leaves, chopped",
          "Salt to taste",
          "Water as needed",
          "Fried onions and boiled eggs for garnish (optional)"
        ],
        directions: [
          "1. Marinate the chicken or lamb with yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, and salt. Let it marinate for at least 1 hour or overnight for better flavor.",
          "2. In a large pot, heat the oil or ghee over medium heat. Add cumin seeds, bay leaf, cloves, cardamom, and cinnamon stick, and sauté until fragrant.",
          "3. Add the sliced onions and cook until golden brown, then stir in the chopped tomatoes and cook until they soften.",
          "4. Add the marinated meat to the pot and cook until the meat is browned and the sauce thickens.",
          "5. In a separate pot, bring water to a boil with a pinch of salt. Add the soaked rice and cook until it’s 70% done, then drain.",
          "6. Layer the partially cooked rice over the meat mixture in the pot. Drizzle the saffron milk over the rice, along with chopped cilantro and mint leaves.",
          "7. Cover the pot with a tight-fitting lid and cook on low heat for 30-40 minutes, allowing the rice to steam and the flavors to meld.",
          "8. Once cooked, gently fluff the rice and meat layers together. Garnish with fried onions and boiled eggs, if desired, and serve hot."
        ],
    },
    {
        title: "Confit Byaldi",
        description:
          "Confit Byaldi is a refined version of ratatouille, featuring thinly sliced vegetables layered and slow-cooked to perfection in a rich, aromatic tomato sauce.",
        duration: "2 hours 30 minutes",
        cost: "$12 - $15",
        image: ConfitByaldiImage,
        ingredients: [
          "2 eggplants, thinly sliced",
          "2 zucchinis, thinly sliced",
          "2 yellow squash, thinly sliced",
          "4 Roma tomatoes, thinly sliced",
          "1 red bell pepper, thinly sliced",
          "1 yellow bell pepper, thinly sliced",
          "2 tablespoons olive oil",
          "2 cloves garlic, minced",
          "1 onion, finely chopped",
          "1 can crushed tomatoes (14 oz)",
          "1 tablespoon tomato paste",
          "1 teaspoon fresh thyme leaves",
          "Fresh basil leaves for garnish",
          "Salt and pepper to taste"
        ],
        directions: [
          "1. Preheat your oven to 275°F (135°C).",
          "2. In a large pan, heat olive oil over medium heat. Add the chopped onions and cook until softened, about 5 minutes.",
          "3. Stir in the garlic, tomato paste, crushed tomatoes, and fresh thyme. Simmer the sauce for 10 minutes, then season with salt and pepper.",
          "4. Spread the tomato sauce evenly across the bottom of a baking dish.",
          "5. Arrange alternating slices of eggplant, zucchini, yellow squash, Roma tomatoes, red bell pepper, and yellow bell pepper in concentric circles or a straight line over the sauce. Slightly overlap the slices.",
          "6. Drizzle the sliced vegetables with olive oil and season with salt and pepper.",
          "7. Cover the dish with parchment paper, cut to fit, and bake for 2 hours, until the vegetables are tender and lightly browned.",
          "8. For extra color, increase the oven temperature to 400°F (200°C) for the last 10-15 minutes of baking.",
          "9. Garnish with fresh basil leaves before serving. Serve hot as a main or side dish."
        ],
    },
    {
        title: "Gumbo",
        description:
          "A rich and flavorful Southern stew made with a dark roux, vegetables, and a combination of seafood, sausage, or chicken, served over rice for a hearty meal.",
        duration: "2 hours",
        cost: "$15 - $20",
        image: GumboImage,
        ingredients: [
          "1/2 cup vegetable oil",
          "1/2 cup all-purpose flour",
          "1 green bell pepper, diced",
          "1 onion, diced",
          "3 celery stalks, diced",
          "4 cloves garlic, minced",
          "1 pound smoked sausage, sliced",
          "1 pound chicken thighs, boneless and skinless, cut into chunks",
          "1 pound shrimp, peeled and deveined",
          "4 cups chicken broth",
          "2 cups water",
          "1 can diced tomatoes (14 oz)",
          "2 tablespoons Cajun seasoning",
          "1 teaspoon dried thyme",
          "2 bay leaves",
          "Salt and pepper to taste",
          "Cooked white rice for serving",
          "Green onions and parsley for garnish"
        ],
        directions: [
          "1. In a large pot, make a roux by whisking the vegetable oil and flour over medium heat. Continue whisking constantly for about 20-30 minutes, until the roux turns a deep brown color.",
          "2. Add the diced bell pepper, onion, celery, and garlic to the roux. Cook for 5-7 minutes, stirring occasionally, until the vegetables are softened.",
          "3. Stir in the sliced sausage and chicken, cooking for 5-7 minutes until browned.",
          "4. Add the chicken broth, water, diced tomatoes, Cajun seasoning, thyme, bay leaves, salt, and pepper. Bring to a simmer and cook for 45 minutes, stirring occasionally.",
          "5. Add the shrimp to the pot and cook for an additional 10 minutes, or until the shrimp are cooked through.",
          "6. Serve the gumbo hot over cooked white rice, and garnish with chopped green onions and parsley."
        ],
    },
    {
        title: "Moussaka",
        description:
          "Moussaka is a classic Greek dish made with layers of eggplant, ground meat, and a creamy béchamel sauce, baked to golden perfection.",
        duration: "2 hours",
        cost: "$15 - $18",
        image: MoussakaImage,
        ingredients: [
          "2 large eggplants, sliced into rounds",
          "3 tablespoons olive oil",
          "1 large onion, diced",
          "2 cloves garlic, minced",
          "500g ground beef or lamb",
          "1 can (14 oz) crushed tomatoes",
          "1/2 teaspoon ground cinnamon",
          "1/2 teaspoon ground allspice",
          "Salt and pepper to taste",
          "1 cup grated Parmesan cheese",
          "2 cups whole milk",
          "4 tablespoons butter",
          "4 tablespoons all-purpose flour",
          "1/4 teaspoon ground nutmeg",
          "2 eggs, lightly beaten"
        ],
        directions: [
          "1. Preheat the oven to 375°F (190°C). Lay the eggplant slices on a baking sheet, drizzle with olive oil, and roast for 20 minutes until tender.",
          "2. In a large pan, heat olive oil over medium heat. Add diced onion and garlic, cooking until softened, about 5 minutes.",
          "3. Add ground beef or lamb, cooking until browned. Stir in crushed tomatoes, cinnamon, allspice, salt, and pepper. Simmer for 20 minutes to let the flavors meld.",
          "4. For the béchamel sauce, melt butter in a saucepan over medium heat. Stir in flour and cook for 2 minutes. Gradually whisk in the milk and cook until thickened. Remove from heat, stir in nutmeg, and allow to cool slightly. Whisk in beaten eggs.",
          "5. In a greased baking dish, layer half of the roasted eggplant slices, followed by the meat sauce, then the remaining eggplant slices. Pour the béchamel sauce over the top, spreading it evenly.",
          "6. Sprinkle grated Parmesan cheese over the béchamel. Bake for 45 minutes, or until the top is golden and bubbly.",
          "7. Let the Moussaka cool for 10-15 minutes before serving to allow the layers to set."
        ],
    },
    {
        title: "Omurice",
    description:
      "A popular Japanese dish that combines fried rice with a fluffy omelette, often topped with ketchup or a savory sauce for a satisfying, comforting meal.",
    duration: "30 minutes",
    cost: "$5 - $8",
    image: OmuriceImage,
    ingredients: [
      "2 cups cooked rice",
      "2 tablespoons vegetable oil",
      "1/2 onion, finely chopped",
      "1/2 carrot, diced",
      "1/2 cup cooked chicken, diced",
      "2 tablespoons ketchup (plus more for garnish)",
      "1 tablespoon soy sauce",
      "4 large eggs",
      "Salt and pepper to taste",
      "Chopped parsley or green onions for garnish (optional)"
    ],
    directions: [
      "1. Heat 1 tablespoon of vegetable oil in a large pan over medium heat. Add the chopped onion and carrot, sautéing for 3-4 minutes until softened.",
      "2. Stir in the diced chicken and cook for another 2 minutes, just until heated through.",
      "3. Add the cooked rice to the pan, followed by the ketchup and soy sauce. Stir everything together, cooking for another 2-3 minutes until well mixed. Season with salt and pepper to taste.",
      "4. Remove the fried rice from the pan and set it aside. Clean the pan or use a separate one for the eggs.",
      "5. Beat two eggs in a bowl and season with a pinch of salt. Heat 1/2 tablespoon of oil in the pan over medium heat, then pour the eggs in, swirling them around the pan to make a thin, even layer.",
      "6. When the egg is just set but still soft, spoon half of the fried rice into the center. Fold the omelette over the rice, shaping it into a neat package, and slide it onto a plate. Repeat with the remaining eggs and rice.",
      "7. Drizzle ketchup over the top for garnish and serve with chopped parsley or green onions, if desired."
    ],
    },
    {
        title: "Roasted Chicken",
        description:
          "A timeless dish featuring golden, crispy skin and juicy, perfectly seasoned meat, roasted to perfection for a comforting and hearty meal.",
        duration: "1 hour 30 minutes",
        cost: "$10 - $12",
        image: RoastedChickenImage,
        ingredients: [
          "1 whole chicken (about 4-5 pounds)",
          "Salt and pepper, to taste",
          "1-2 tablespoons olive oil or melted butter",
          "1 lemon, halved (optional)",
          "Fresh herbs (rosemary, thyme, or parsley, optional)",
          "4 cloves garlic (optional)",
          "1 onion, quartered (optional)",
          "Vegetables for roasting (carrots, potatoes, etc., optional)"
        ],
        directions: [
          "1. Preheat your oven to 425°F (220°C).",
          "2. Rinse the chicken inside and out, then pat it dry with paper towels.",
          "3. Season the chicken generously with salt, pepper, and any desired herbs (like rosemary or thyme).",
          "4. Rub the chicken with olive oil or melted butter to help crisp the skin.",
          "5. Place the chicken breast-side up in a roasting pan or on a baking sheet with a rack.",
          "6. Roast the chicken in the oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured in the thickest part of the thigh.",
          "7. Let the chicken rest for 10-15 minutes before carving to allow the juices to redistribute.",
          "8. Carve and serve with your favorite sides for a delicious, comforting meal."
        ],
    },
    {
        title: "Spaghetti Bolognese",
        description:
          "A classic Italian pasta dish with rich, slow-cooked tomato sauce and hearty ground beef, served over perfectly cooked spaghetti for a comforting, filling dinner.",
        duration: "1 hour 30 minutes",
        cost: "$12 - $15",
        image: SpaghettiBologneseImage,
        ingredients: [
          "1 tablespoon olive oil",
          "1 onion, diced",
          "2 cloves garlic, minced",
          "1 carrot, finely diced",
          "500g ground beef",
          "800g crushed tomatoes (or tomato sauce)",
          "2 tablespoons tomato paste",
          "1/4 cup red wine or beef broth (optional)",
          "Salt and pepper, to taste",
          "1 teaspoon Italian herbs (oregano, basil, thyme)",
          "400g spaghetti",
          "Grated Parmesan cheese (for garnish)",
          "Fresh basil leaves (optional, for garnish)"
        ],
        directions: [
          "1. Heat a tablespoon of olive oil in a large pan over medium heat.",
          "2. Add diced onions, garlic, and carrots, sautéing until softened, about 5 minutes.",
          "3. Stir in ground beef and cook until browned, breaking it up with a spoon.",
          "4. Pour in crushed tomatoes, tomato paste, and a splash of red wine or beef broth, and season with salt, pepper, and Italian herbs.",
          "5. Reduce heat to low, cover, and let the sauce simmer for at least an hour to develop the flavors.",
          "6. While the sauce simmers, cook spaghetti according to package instructions until al dente.",
          "7. Serve the sauce over the cooked spaghetti, garnishing with grated Parmesan and fresh basil if desired.",
        ],
    },
    {
        title: "Stir Fry",
        description:
          "A vibrant mix of fresh, crisp vegetables tossed in a savory sauce, offering a quick, healthy, and delicious meal full of texture and flavor.",
        duration: "20 minutes",
        cost: "$8 - $10",
        image: StirFryImage,
        ingredients: [
          "1 tablespoon oil (vegetable or sesame)",
          "1 bell pepper, sliced",
          "1 cup broccoli florets",
          "1 carrot, thinly sliced",
          "1/2 onion, sliced",
          "Optional protein: 200g chicken, beef, tofu, or shrimp",
          "2 cloves garlic, minced",
          "1 teaspoon fresh ginger, minced",
          "2 tablespoons soy sauce",
          "1 teaspoon sesame oil",
          "Chili flakes (optional, for spice)",
          "Cooked rice or noodles (for serving)",
          "Sesame seeds or chopped green onions (for garnish)"
        ],
        directions: [
          "1. Heat a tablespoon of oil in a large pan or wok over medium-high heat.",
          "2. Add sliced vegetables of your choice (e.g., bell peppers, broccoli, carrots, onions) and stir-fry for 3-4 minutes until they begin to soften.",
          "3. If desired, add a protein like chicken, beef, tofu, or shrimp and cook until fully cooked through.",
          "4. Stir in minced garlic, ginger, and any desired seasonings like soy sauce, sesame oil, or chili flakes.",
          "5. Continue stir-frying for an additional 2-3 minutes, ensuring everything is coated in the sauce and cooked to your liking.",
          "6. Serve hot over rice or noodles, garnishing with sesame seeds or chopped green onions if desired.",
        ],
    }
    // Add other recipes here...
  ];
  
  // RecipeDisplay Component
  const RecipeDisplay = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State to hold the selected recipe
  
    const handleRecipeClick = (recipe) => {
      setSelectedRecipe(recipe); // Set the clicked recipe as the selected recipe
    };
  
    return (
      <div className="recipe-container">
        <h1>Click a Recipe to View Details</h1>
        <div className="recipe-list">
          {/* Display clickable recipe images or buttons */}
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-preview" onClick={() => handleRecipeClick(recipe)}>
              <img src={recipe.image} alt={recipe.title} className="recipe-thumbnail" />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
  
        {selectedRecipe && (
          <div className="recipe-details">
            <h2 className="recipe-title">{selectedRecipe.title}</h2>
            <p className="recipe-description">{selectedRecipe.description}</p>
            <div className="recipe-info">
              <p><strong>Duration:</strong> {selectedRecipe.duration}</p>
              <p><strong>Cost to make:</strong> {selectedRecipe.cost}</p>
            </div>
            <div className="recipe-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-directions">
              <h3>Directions:</h3>
              <ol>
                {selectedRecipe.directions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default RecipeDisplay;