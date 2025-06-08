import React from "react";
import { Link } from "react-router-dom";

import testImg from "/test.png"; // Assuming you have an image in the assets folder

const Home = () => {
  const recipe = {
    title: "Tuscana Soup",
    description:
      "A hearty and flavorful soup with Italian sausage, kale, and potatoes. The perfect dinner for the hard working poor italian!",
    totalTime: "65 minutes",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    cleanupTime: "20 minutes",
    servings: 8,
    tasteDesc: "Beyond Delicious!",
    taste: 5,
    costDesc: "Low Cost",
    cost: 1,
    difficultyDesc: "Not Hard",
    difficulty: 2,
    ingredients: [
      "1 lb Italian Sausage",
      "3-4 c Kale",
      "~2 lb Yukon or Russet Potatoes ",
      "1 medium Sweet Onion",
      "3-5 cloves Garlic",
      "3 tbsp Salted Butter",
      "6 c Chicken Broth",
      "1-2 c Water",
      "1 c Heavy Cream",
      "Salt",
      "Black Pepper",
      "Italian Seasoning",
      "Onion Powder",
      "Garlic Powder",
      "Red Pepper Flakes (optional)",
      "Bay Leaves (optional)",
      "Parmesan Cheese (optional)",
    ],
    miceEnPlace: [
      "Dice Onion into medium bits.",
      "Wash and chop the kale.",
      "Peel and dice potatoes.",
      "Mince garlic.",
    ],
    instructions:
      "1. Cook and brown the sausage in a large pot. Set aside once cooked. \n2. In the same pot, add diced onion, butter, herbs and spices, and cook until translucent. \n3. Add minced garlic and cook for another minute. \n4. Pour in chicken broth and bring to a boil. \n5. Add diced potatoes and cook until just before tender, about 10 minutes depending on potato size. \n6. Steam Kale on top for ~5 minutes. \n7. Stir in Sausage. \n8. Add heavy cream, lower to simmer, for 5 minutes. \n9. Season with salt and pepper to taste.\n10. Serve with Parmesian \nBon Appétit!",
    tipsAndTricks:
      "Use fresh ingredients for the best flavor.\nAdd in Bay leaves for extra depth or Red Pepper Flakes for spice!.\nDeglaze pot with broth and butter before onions\nFor a thicker soup, use russet potatoes or cook a small amount longer",
    moreInfo:
      "This recipe is a family favorite and is perfect for a cozy dinner. It can be easily adjusted to suit your taste preferences, theres a small amount of prep, everyone loves it, it's cheap, it's filling, and it's somewhat healthy! You can also add more vegetables or substitute the sausage with a vegetarian option if desired. An absolute favorite served in only the finest establishments such as Olive Garden! Great beginner dish!",
    image: testImg,
  };

  return (
    <>
      <header className="h-[18vh]"></header>
      <content id="page-content">
        <section>
          <h1 id="recipe-title">{recipe.title}</h1>
          <div id="recipe-specs-box">
            <div id="recipe-specs-top">
              <div id="left">
                <div id="recipe-total-time">{recipe.totalTime}</div>
                <div id="recipe-prep-time">{recipe.prepTime}</div>
                <div id="recipe-cook-time">{recipe.cookTime}</div>
                <div id="recipe-cleanup-time">{recipe.cleanupTime}</div>
                <div id="recipe-servings">{recipe.servings}</div>
              </div>
              {/* BREAK HERE */}
              <div id="right">
                <div id="recipe-taste">{recipe.taste}</div>
                <div id="recipe-taste-desc">{recipe.tasteDesc}</div>
                <div id="recipe-cost-desc">{recipe.costDesc}</div>
                <div id="recipe-cost">{recipe.cost}</div>
                <div id="recipe-difficulty-desc">{recipe.difficultyDesc}</div>
                <div id="recipe-difficulty">{recipe.difficulty}</div>
              </div>
            </div>
            <div id="recipe-description-bottom">
              <p id="recipe-description-text">{recipe.description}</p>
              <img src={recipe.image} alt="test-img" />
            </div>
          </div>
        </section>
        <body id="recipe-body">
          <div id="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul id="recipe-ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="recipe-ingredient-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div id="recipe-instructions">
            <h2>Instructions</h2>
            <p id="recipe-mise-en-place">
              <strong>Mise En Place:</strong>
              <ul>
                {recipe.miceEnPlace.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <p id="recipe-instructions-list">{recipe.instructions}</p>
          </div>
        </body>
        <section id="tips-and-tricks-section">
          <h2>Tips And Tricks!</h2>
          <p id="recipe-tips-and-tricks">{recipe.tipsAndTricks}</p>
          <h2>Chef's Note:</h2>
          <p id="recipe-more-info">{recipe.moreInfo}</p>
        </section>
      </content>

      <></>
    </>
  );
};

export default Home;
