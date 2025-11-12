import { useParams, Link } from "react-router-dom";
import {
  FaClock,
  FaUserAlt,
  FaUtensils,
  FaFireAlt,
  FaSoap,
  FaDollarSign,
  FaHeart,
  FaStar,
  FaRegCircle,
  FaCheckCircle,
} from "react-icons/fa";
import recipeData from "../data/recipes.json";
import slugify from "slugify";
import { useState } from "react";

window.scrollTo(0, 0);
const screenWidth = window.innerWidth;
const statsIconSize =
  window.innerWidth > 1000 ? (window.innerWidth > 768 ? 44 : 32) : 24;

const IconRating = ({ count, total = 5, Icon, color, emptyColor }) => (
  <div className="flex gap-1">
    {[...Array(total)].map((_, i) => (
      <Icon
        key={i}
        className={`text-3xl md:text-3xl lg:text-5xl xl:text-6xl mx-0 md:mx-1 ${
          i < count ? color : emptyColor
        }`}
      />
    ))}
  </div>
);

const RecipeStats = ({ recipeData }) => (
  <div
    id="recipe-stats"
    className="flex flex-col gap-2 lg:gap-4 h-full w-full items-start justify-center text-slate-50 font-redhat text-md md:text-lg lg:text-xl p-2"
  >
    <div className="flex items-center ">
      <FaClock size={statsIconSize} className=" mx-2" />
      <span className="font-bold">{recipeData.totalTime}</span> &nbsp;
      <span className="underline">total</span>
    </div>
    <div id="cooktimes" className="flex flex-col items-start pl-4">
      <div className="flex justify-center items-center text-sm md:text-md md:text-lg lg:text-xl xl:text-2xl">
        <FaUtensils size={screenWidth > 768 ? 20 : 12} className=" mx-2" />
        <span className="font-bold">{recipeData.prepTime}</span>&nbsp;prep
      </div>
      <div className="flex justify-center items-center text-sm md:text-md md:text-lg lg:text-xl xl:text-2xl">
        <FaFireAlt size={screenWidth > 768 ? 20 : 12} className=" mx-2" />
        <span className="font-bold">{recipeData.prepTime}</span>&nbsp; cooktime
      </div>
      <div className="flex justify-center items-center text-sm md:text-md md:text-lg lg:text-xl xl:text-2xl">
        <FaSoap size={screenWidth > 768 ? 20 : 12} className=" mx-2" />
        <span className="font-bold">{recipeData.prepTime}</span>&nbsp; cleanup
      </div>
    </div>
    <div className="flex items-center ">
      <FaUserAlt size={statsIconSize} className=" mx-2" />
      Serves &nbsp;<span className="font-bold">{recipeData.servings}</span>
    </div>
    <div className="flex items-center ">
      <FaDollarSign size={statsIconSize} className=" mx-2" />
      {/* IMPORTANT AFTER UPDATED DATA. This will need to be a dollar amount instaed of the 1-5 cost property since thats for the stars */}
      Costs &nbsp;<span className="font-bold">~ &nbsp;{recipeData.cost}</span>
    </div>
    <div className="flex items-center ">
      <FaDollarSign size={statsIconSize - 4} className=" ml-2" />
      <span className="font-bold md:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        /
      </span>
      <FaUserAlt size={statsIconSize - 4} className=" mr-2" />
      {/* IMPORTANT AFTER UPDATED DATA. This will need to be a dollar amount instaed of the 1-5 cost property since thats for the stars */}
      Costs &nbsp;
      <span className="font-bold">
        ~ &nbsp;{(recipeData.cost / recipeData.servings).toFixed(2)} per person
      </span>
    </div>
  </div>
);

const RecipePage = () => {
  window.scrollTo(0, 0);
  const { slug } = useParams();

  const recipe = recipeData.find(
    (r) => slugify(r.title, { lower: true }) === slug
  );

  if (!recipe) {
    return <div className="text-center text-red-600">Recipe not found.</div>;
  }

  const [checkedIngredientItems, setCheckedIngredientItems] = useState(
    Array(recipe.ingredients.length).fill(false)
  );
  const [checkedEquipmentItems, setCheckedEquipmentItems] = useState(
    Array(recipe.ingredients.length).fill(false)
  );

  const toggleIngredientCheck = (index) => {
    setCheckedIngredientItems((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };
  const toggleEquipmentCheck = (index) => {
    setCheckedEquipmentItems((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  // *** Attempt at getting keywords for ingredients and equipment to automatically highlight in instructions.
  // //  FUNCTION FOR HIGHLIGHTING INGREDIENTS AND EQUIPMENT
  // const normalize = (s) => s.toLowerCase().replace(/[.,!?;:()"'`]/g, "");

  // const ingredientList = recipe.ingredients.map((i) => normalize(i.ingredient));

  // const equipmentList = recipe.equipment.map((e) => normalize(e.equipment));

  // console.log(ingredientList);
  // console.log(equipmentList);

  // const highlightMatches = (lines, ingredientList, equipmentList) => {
  //   // Build a regex that matches full words or phrases (escape regex chars)

  //   const pattern = new RegExp(
  //     `\\b(${ingredientList
  //       .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  //       .join("|")})\\b`,
  //     "gi"
  //   );
  //   const highlightedInstructions = lines.map((line) =>
  //     line.replace(pattern, (match) => `!${match}!`)
  //   );

  //   const equipmentPattern = new RegExp(
  //     `\\b(${equipmentList
  //       .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  //       .join("|")})\\b`,
  //     "gi"
  //   );
  //   return highlightedInstructions.map((line) =>
  //     line.replace(equipmentPattern, (match) => `?${match}?`)
  //   );
  // };

  // const highlightedInstructions = highlightMatches(
  //   recipe.instructions,
  //   ingredientList,
  //   equipmentList
  // );
  console.log(`Recipe : ${recipe}`);

  return (
    <div className="relative w-full h-auto flex flex-col">
      {/* ---HEADER--- */}
      <div id="recipe-page-header" className="w-full h-auto flex flex-col">
        {/* Header title */}
        <div
          id="recipe-page-title"
          className="bg-slate-800 w-full h-[15vh] sm:h-[15vh] md:h-[17vh] flex flex-col"
        >
          <h1 className="h-1/2 w-full"></h1>
          <div className="h-1/2 w-full flex justify-center items-center lg:justify-start">
            <h2 className="relative translate-y-4 lg:translate-y-8 rounded-sm bg-slate-300 border-4 border-sky-800 lg:left-[14%] p-2 w-fit text-2xl md:text-4xl text-slate-900 font-redhat font-bold  z-20">
              {recipe.title}
            </h2>
          </div>
        </div>
        {/* Header Hero */}
        <div
          id="recipe-page-hero"
          className="relative flex w-full lg:flex-row items-center justify-center lg:justify-center h-[50vh]"
        >
          {/* Overlay */}
          <div className="absolute h-[100%] w-full bg-slate-800/80 backdrop-blur-md pointer-events-none" />
          {/* Image */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[105%] pl-0 w-fit z-10 rounded-md"
          />
          {screenWidth > 768 ? (
            <div
              id="recipe-page"
              className="w-1/2 h-[80%] flex justify-center bg-slate-500 z-10 rounded-r-lg"
            >
              <div className="flex flex-col justify-center items-center w-1/2 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
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
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
                    {recipe.costDesc}
                  </h2>
                  <IconRating
                    count={recipe.cost}
                    Icon={FaDollarSign}
                    color="text-emerald-600 drop-shadow-md drop-shadow-emerald-200"
                    emptyColor="text-slate-600 "
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
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
              <div className="w-1/2 h-full">
                <RecipeStats recipeData={recipe} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* Header Padding */}
        <div className="bg-slate-800 w-full h-[1.5rem] lg:h-[2.3rem]"></div>
        {/* Header Stats */}
        {screenWidth < 768 ? (
          <>
            <div
              id="recipe-page-stats"
              className="w-full flex bg-slate-500 h-auto py-4 pr-0 lg:pr-[12%]"
            >
              <div className="flex flex-col justify-center items-center w-1/2 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
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
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
                    {recipe.costDesc}
                  </h2>
                  <IconRating
                    count={recipe.cost}
                    Icon={FaDollarSign}
                    color="text-emerald-600 drop-shadow-md drop-shadow-emerald-200"
                    emptyColor="text-slate-600 "
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-lg text-2xl md:text-2xl lg:text-2xl text-slate-300 font-redhat font-semibold mb-1">
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
              <div className="w-1/2 h-full">
                <RecipeStats recipeData={recipe} />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        id="recipe-page-content"
        className="w-full h-auto w-max-7xl bg-gray-800/50"
      >
        <div id="content-container" className="w-full h-auto bg-slate-800">
          <div className="w-full h-auto mx-auto p-4 lg:p-6 max-w-7xl">
            <h1 className="text-2xl lg:text-4xl mb-4 font-bold font-redhat text-slate-300">
              {recipe.title}
            </h1>
            <div className="h-1 w-full bg-slate-300 my-2"></div>
            <p className="text-lg md:text-xl lg:text-2xl mx-4 mt-1 mb-8 font-redhat text-slate-200">
              {recipe.description}
            </p>
            <h2 className="text-2xl text-center underline md:text-3xl lg:text-4xl  my-4 font-bold font-redhat text-slate-300">
              &nbsp;&nbsp;&nbsp;&nbsp;What you'll need&nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
            <div id="recipe-requirements" className="flex">
              <div
                id="recipe-ingredients"
                className="w-1/2 h-auto bg-slate-300 text-sky-900 rounded-md p-2 lg:p-4 text-lg lg:text-xl"
              >
                <h3 className="text-sky-800 font-redhat font-bold text-lg lg:text-xl">
                  Ingredients
                </h3>
                <div className="h-1 w-full bg-sky-800 mx-1 my-1"></div>
                <ul>
                  {recipe.ingredients.map((element, index) => (
                    <li
                      key={index}
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleIngredientCheck(index)}
                    >
                      {checkedIngredientItems[index] ? (
                        <FaCheckCircle className="text-emerald-500 text-lg md:text-xl" />
                      ) : (
                        <FaRegCircle className="text-sky-800 text-lg md:text-xl" />
                      )}
                      <span
                        className={`transition-colors mx-2 ${
                          checkedIngredientItems[index] ? "line-through" : ""
                        }`}
                      >
                        {element.amount}&nbsp;{element.unit}&nbsp;
                        {element.ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                id="recipe-equipment"
                className=" w-1/2 h-auto p-2 lg:p-4 text-slate-300 text-lg lg:text-xl"
              >
                <h3 className="text-slate-300 font-redhat font-bold text-lg lg:text-xl">
                  Equipment Needed
                </h3>
                <div className="h-1 w-full bg-slate-300 mx-1 my-1"></div>
                <ul>
                  {/* THIS WILL NEED TO BE UPDATED TO USE THE EQUIPMENT ARRAY ONCE DATA IS UPDATED */}
                  {recipe.equipment.map((element, index) => (
                    <li
                      key={index}
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleEquipmentCheck(index)}
                    >
                      {checkedEquipmentItems[index] ? (
                        <FaCheckCircle className="text-emerald-500 text-lg md:text-xl" />
                      ) : (
                        <FaRegCircle className="text-slate-300 text-lg md:text-xl" />
                      )}
                      <span
                        className={`transition-colors mx-2 ${
                          checkedEquipmentItems[index] ? "line-through" : ""
                        }`}
                      >
                        {element.optional ? "(Optional) " : ""}
                        {element.equipment}
                        {element.alt ? ` Or ${element.alt}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="mice-en-place" className="">
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl underline font-bold font-redhat text-slate-50 m-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Mice En Place&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
              <div id="recipe-prep" className="flex">
                <ol className="w-1/2 p-2 lg:p-4">
                  {/* THIS WILL NEED TO BE UPDATED TO USE THE EQUIPMENT ARRAY ONCE DATA IS UPDATED */}
                  {recipe.miceEnPlace.map((step, index) => (
                    <li className="text-slate-300 text-lg md:text-xl lg:text-2xl m-1">
                      {index + 1}.&nbsp;{step}
                    </li>
                  ))}
                </ol>
                <div
                  id="tips"
                  className="w-1/2 bg-amber-200 p-2 lg:p-4 rounded-md font-redhat"
                >
                  <h3 className="text-lg text-center md:text-xl lg:text-2xl text-sky-800 font-bold mb-2">
                    Tips And Tricks!
                  </h3>
                  <ul className="text-md lg:text-lg text-sky-800 font-bold">
                    {recipe.tipsAndTricks.map((element, index) => (
                      <li>{element}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl underline font-bold font-redhat text-slate-50 m-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Instructions&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
              <ol className="text-md lg:text-lg text-sky-800">
                {/* {console.log(highlightedInstructions)} */}
                {recipe.instructions.map((element, index) => (
                  <li className="text-slate-300 text-lg md:text-xl lg:text-2xl m-1">
                    {index + 1}. {element}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
