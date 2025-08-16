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
import tuscana from "/tuscana.jpg";

const IconRating = ({ count, total = 5, Icon, color, emptyColor }) => (
  <div className="flex gap-1">
    {[...Array(total)].map((_, i) => (
      <Icon
        key={i}
        className={`text-5xl mx-1 ${i < count ? color : emptyColor}`}
      />
    ))}
  </div>
);

const RecipePage = () => {
  const recipe = {
    title: "Tuscana Soup",
    description:
      "A hearty and flavorful soup with Italian sausage, kale, and potatoes. The perfect dinner for the hard working poor italian!",
    totalTime: "65 minutes",
    prepTime: "15 min",
    cookTime: "30 min",
    cleanupTime: "20 min",
    servings: 8,
    tasteDesc: "Simply Delicious!",
    taste: 4,
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
    image: tuscana,
  };

  return (
    <div className="relative pt-[12vh] bg-gray-600 bg-cover bg-opacity-30 backdrop-blur-lg p-12 bg-cover w-[60vw] mx-auto min-h-screen z-10">
      <h1 className="ml-[5vh] text-left text-6xl text-slate-100 mb-4 font-roboto font-weight-100 tracking-tight ">
        {recipe.title}
      </h1>
      <div className="h-1 w-full bg-amber-300 mx-auto mt-2 mb-8"></div>

      <div className="bg-sky-200 text-slate-900 rounded-lg shadow-lg p-8">
        {/* Top Specs Section */}
        <div className="flex flex-row bg-yellow-500 rounded-md gap-12 mb-10">
          <div className="flex flex-col font-roboto items-center justify-center w-[60%]  text-slate-900 bg-sky-400 space-y-6 p-4 rounded-lg scale-[1.05]">
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">
                {recipe.tasteDesc}
              </h2>

              <IconRating
                count={recipe.taste}
                Icon={FaHeart}
                color="text-rose-400 drop-shadow-md drop-shadow-rose-300"
                emptyColor="text-slate-600"
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">{recipe.costDesc}</h2>
              <IconRating
                count={recipe.cost}
                Icon={FaDollarSign}
                color="text-emerald-600 drop-shadow-md drop-shadow-emerald-200"
                emptyColor="text-slate-600 "
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">
                {recipe.difficultyDesc}
              </h2>
              <IconRating
                count={recipe.difficulty}
                Icon={FaStar}
                color="text-amber-300 drop-shadow-md drop-shadow-amber-100"
                emptyColor="text-slate-600 drop-shadow-inner"
              />
            </div>
          </div>
          <div className="flex flex-col font-roboto text-slate-100 w-[40%] justify-center items-center space-y-8">
            <div className="flex flex-col w-[80%] items-left gap-3">
              <div className="flex flex-row items-center gap-3">
                <FaClock className="text-4xl" />
                <span className="text-2xl">{recipe.totalTime}</span>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <FaUtensils className="text-2xl ml-[2rem]" />
                  <span className="text-xl">Prep : {recipe.prepTime}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <FaFireAlt className="text-2xl ml-[2rem]" />
                  <span className="text-xl">Cook : {recipe.cookTime}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <FaSoap className="text-2xl ml-[2rem]" />
                  <span className="text-xl">
                    Cleanup : {recipe.cleanupTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mt-12 items-center w-[80%]  gap-3">
              <FaUserAlt className="text-4xl" />
              <span className="text-2xl">{recipe.servings} servings</span>
            </div>
          </div>
        </div>

        {/* Image + Description */}
        <div className="flex flex-col bg-emerald-500 rounded-md lg:flex-row gap-10 items-center">
          <div className="flex-1 h-full rounded-md flex justify-start items-start p-4">
            <p className="text-xl font-roboto text-slate-100 text-left">
              {recipe.description}
            </p>
          </div>
          <div className="flex-1">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto rounded-lg shadow-md scale-[105%]"
            />
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <section className="mt-14">
        <h2 className="text-5xl text-slate-100 font-roboto font-bold mb-4">
          Ingredients
        </h2>
        <div className="h-1 w-full bg-sky-900 mx-auto mt-1 mb-4"></div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 text-slate-200 text-lg list-disc list-inside">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="mt-14">
        <h2 className="text-5xl font-bold  font-roboto text-slate-100 mb-2">
          Instructions
        </h2>
        <div className="h-1 w-full bg-sky-900 mx-auto mt-1 mb-4"></div>
        <div className="mb-6 text-slate-200 text-lg">
          <strong className="block mb-2 text-3xl text-slate-100">
            Mise En Place:
          </strong>
          <ul className="list-disc text-lg list-inside ml-4 mb-1">
            {recipe.miceEnPlace.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="whitespace-pre-line text-slate-200 text-lg">
          {recipe.instructions}
        </p>
      </section>

      {/* Tips & Notes */}
      <section className="mt-8">
        <div className="bg-sky-200 rounded-lg p-6 shadow-inner">
          <h2 className="text-3xl font-bold text-slate-100">Tips And Tricks</h2>
          <div className="h-1 w-full bg-sky-900 mx-auto mt-1 mb-4"></div>
          <p className="text-slate-200 whitespace-pre-line text-lg mb-6">
            {recipe.tipsAndTricks}
          </p>

          <h2 className="text-3xl font-bold text-slate-100">Chef's Note</h2>
          <div className="h-1 w-full bg-sky-900 mx-auto mt-1 mb-4"></div>
          <p className="text-slate-200 whitespace-pre-line text-lg">
            {recipe.moreInfo}
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecipePage;
