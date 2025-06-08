import React from "react";
import {
  FaClock,
  FaUserAlt,
  FaUtensils,
  FaFireAlt,
  FaSoap,
  FaDollarSign,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import testImg from "/test.png";

const IconRating = ({ count, total = 5, Icon, color, emptyColor }) => (
  <div className="flex gap-1">
    {[...Array(total)].map((_, i) => (
      <Icon
        key={i}
        className={`text-6xl mx-1 ${i < count ? color : emptyColor}`}
      />
    ))}
  </div>
);

const HomeStyled = () => {
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
    <div className="pt-[12vh] px-4 py-6 bg-gray-900 text-slate-100 min-h-screen">
      <section className="max-w-6xl mx-auto">
        <h1 className="ml-[5vh] text-left text-6xl text-white mb-4 font-roboto font-weight-100 tracking-tight ">
          {recipe.title}
        </h1>
        <div className="h-1 w-full bg-amber-300 mx-auto mt-2 mb-8"></div>

        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
          {/* Top Specs Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
            <div className="flex-1 space-y-8 text-left">
              <div className="flex items-center gap-3">
                <FaClock className="text-4xl" />
                <span className="text-2xl">{recipe.totalTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUtensils className="text-2xl ml-[2rem]" />
                <span className="text-xl">Prep : {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFireAlt className="text-2xl ml-[2rem]" />
                <span className="text-xl">Cook : {recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSoap className="text-2xl ml-[2rem]" />
                <span className="text-xl">Cleanup : {recipe.cleanupTime}</span>
              </div>
              <div className="flex mt-12 items-center gap-3">
                <FaUserAlt className="text-4xl" />
                <span className="text-2xl">{recipe.servings} servings</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-slate-900 w-[50%] bg-slate-500 space-y-6 p-4 rounded-xl">
              <div className="text-center">
                <h2 className="text-2xl  font-semibold mb-1">
                  {recipe.tasteDesc}
                </h2>

                <IconRating
                  count={recipe.taste}
                  Icon={FaHeart}
                  color="text-slate-100"
                  emptyColor="text-slate-600"
                />
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-1">
                  {recipe.costDesc}
                </h2>
                <IconRating
                  count={recipe.cost}
                  Icon={FaDollarSign}
                  color="text-slate-100"
                  emptyColor="text-slate-600"
                />
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-1">
                  {recipe.difficultyDesc}
                </h2>
                <IconRating
                  count={recipe.difficulty}
                  Icon={FaStar}
                  color="text-slate-100"
                  emptyColor="text-slate-600"
                />
              </div>
            </div>
          </div>

          {/* Image + Description */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 text-left">
              <p className="text-lg leading-loose text-slate-200">
                {recipe.description}
              </p>
            </div>
            <div className="flex-1">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-auto rounded-lg shadow-md border border-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-white mb-4">Ingredients</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 text-slate-300 text-lg list-disc list-inside">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-white mb-4">Instructions</h2>
          <div className="mb-6 text-slate-300 text-lg">
            <strong className="block mb-2 text-xl text-white">
              Mise En Place:
            </strong>
            <ul className="list-disc list-inside ml-4">
              {recipe.miceEnPlace.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="whitespace-pre-line text-slate-300 text-lg">
            {recipe.instructions}
          </p>
        </section>

        {/* Tips & Notes */}
        <section className="mt-14">
          <div className="bg-gray-800/60 rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tips And Tricks
            </h2>
            <p className="text-slate-300 whitespace-pre-line text-lg mb-6">
              {recipe.tipsAndTricks}
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Chef's Note</h2>
            <p className="text-slate-300 whitespace-pre-line text-lg">
              {recipe.moreInfo}
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomeStyled;
