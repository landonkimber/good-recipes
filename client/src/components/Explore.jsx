import { useState } from "react";
import recipes from "../data/recipes.json";
import GlobeIcon from "/globe.svg";

import ExploreModal from "./ExploreModal";

const Explore = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedParams, setSelectedParams] = useState(0);

  function getResults(
    difficultyParamMin = 0,
    difficultyParamMax = 5,
    costParamMin = 0,
    costParamMax = 5,
    healthParamMin = 0,
    healthParamMax = 5,
    timeParamMin = 0,
    timeParamMax
  ) {
    return function (recipe) {
      console.log(recipe);
      console.log(recipe.difficulty);
      if (
        recipe.difficulty >= difficultyParamMin &&
        recipe.difficulty <= difficultyParamMax &&
        recipe.cost >= costParamMin &&
        recipe.cost <= costParamMax &&
        //Needs to eventually be changed to recipe.health
        recipe.taste >= healthParamMin &&
        recipe.taste <= healthParamMax
        // Commenting out time until the total time value is a number
        // && recipe.totaltime >= timeParamMin &&
        // recipe.totaltime <= timeParamMax
      ) {
        console.log("passed recipe!");
        return recipe;
      }
    };
  }
  var searchResults = recipes.filter(getResults(selectedParams));

  const RecipeCard = ({ r, onClick }) => (
    <div
      className="relative aspect-3/4 group bg-slate-200/60 rounded-sm overflow-hidden hover:shadow-md hover:shadow-slate-400 transition hover:bg-slate-100/80 hover:border-2 hover:border-sky-300 cursor-pointer"
      onClick={() => onClick(r)}
    >
      <img
        src={r.image}
        alt={r.title}
        className="h-[70%] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="h-[30%] px-2 lg:px-4 pb-2">
        <div className="relative h-3/4">
          <h3 className="absolute bottom-full left-0 translate-y-8 text-2xl bg-slate-700 rounded-sm transition-transform duration-30 p-2 font-semibold font-redhat text-sky-50 group-hover:scale-105 group-hover:bg-sky-400">
            {r.title}
          </h3>
          <div className="absolute top-8 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
            <p className="text-slate-600 text-base font-redhat transition-transform duration-300 group-hover:text-slate-700">
              {r.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-1 flex gap-2 text-sky-900 text-md lg:mt-3 overflow-x-auto whitespace-nowrap max-w-full">
          <p className="px-2 py-1 font-redhat rounded bg-sky-300 text-nowrap w-fit">
            {r.totalTime}
          </p>
          <p className="px-2 py-1 font-redhat rounded bg-emerald-300 text-nowrap w-fit">
            {r.servings} servings
          </p>
          <p className="px-2 py-1 font-redhat rounded bg-amber-300 text-nowrap w-fit">
            {r.difficultyDesc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="explore-guide" className="relative flex flex-col max-w-7xl z-20">
      <div
        id="explore-nav"
        className="flex flex-col items-center w-full h-auto bg-slate-50 rounded-t-md mt-2"
      >
        <div className="flex p-4">
          <img src={GlobeIcon} alt="Globe icon" className="relative h-16" />
          <h2 className="font-lobster font-bold text-slate-800 text-6xl">
            Explore
          </h2>
        </div>
        <div className="h-1 w-[90%] mx-auto my-1 mb-3 bg-slate-800 rounded-md"></div>
        <div
          className="h-1 w-[90%] mx-auto h-12 my-1 mb-3 bg-slate-800 rounded-md"
          onClick={() => {
            setSelectedParams((prev) => prev + 1);
            console.log("clicked");
          }}
        >
          Click here
        </div>
        <h2>Showing {searchResults.length} results</h2>
      </div>

      <div
        id="explore-recipes-container"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 bg-gradient-to-bl from-slate-600/60 to-slate-700/80 rounded-b-md p-12"
      >
        {searchResults.map((r, i) => (
          <RecipeCard key={i} r={r} onClick={setSelectedRecipe} />
        ))}
      </div>

      <ExploreModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default Explore;
