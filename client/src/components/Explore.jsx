import { useState } from "react";

import recipes from "../data/recipes.json";

import GlobeIcon from "/globe.svg";
import { FaUserAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

import ExploreModal from "./ExploreModal";

const Explore = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedParams, setSelectedParams] = useState({
    difficultyParamMin: 1,
    difficultyParamMax: 5,
    costParamMin: 1,
    costParamMax: 5,
    servings: 4,
    // vv Measured in number of Minutes!
    // timeMin: 0,
    timeMax: 90,
  });

  function getResults(
    difficultyParamMin = 0,
    difficultyParamMax = 5,
    costParamMin = 0,
    costParamMax = 5,
    servings = 4,
    // timeParamMin = 0,
    timeMax = 90
  ) {
    return function (recipe) {
      if (
        recipe.difficulty >= selectedParams.difficultyParamMin &&
        recipe.difficulty <= selectedParams.difficultyParamMax &&
        recipe.cost >= selectedParams.costParamMin &&
        recipe.cost <= selectedParams.costParamMax &&
        //Needs to eventually be changed to recipe.health
        // Commenting out time until the total time value is a number
        // && recipe.totaltime >= timeMin

        recipe.totalTime <= selectedParams.timeMax
      ) {
        console.log("passed recipe Params!");
        return recipe;
      } else {
        console.log("recipe did not pass Params :|");
      }
    };
  }
  var searchResults = recipes.filter(getResults(selectedParams));
  const inputIconSize = 32;

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
          <p className="px-2 py-1 font-redhat rounded bg-amber-400 text-sky-800 text-nowrap w-fit">
            {r.servings} servings
          </p>
          <p
            className={`h-fit px-2 py-1 font-redhat rounded text-nowrap ${
              r.difficulty === 5
                ? "bg-red-800 text-black"
                : r.difficulty === 4
                ? "bg-orange-600 text-red-950"
                : r.difficulty === 3
                ? "bg-yellow-300 text-amber-900"
                : r.difficulty === 2
                ? "bg-lime-300 text-green-800"
                : "bg-emerald-500 text-emerald-900"
            }`}
          >
            {r.difficultyDesc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="explore-guide"
      className="relative flex flex-col max-w-7xl w-full z-20"
    >
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
        {/* ----------------- DIFFICULTY FILTERS ---------------- */}
        <div className="w-full py-4 flex justify-center items-center gap-1">
          <h2 className="text-md lg:text-xl xl:text-2xl font-bold font-redhat text-right mr-2 lg:mr-4">
            Difficulty
          </h2>
          <button
            id="allDifficulty-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                difficultyParamMin: 1,
                difficultyParamMax: 5,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-black font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.difficultyParamMin == 1 &&
              selectedParams.difficultyParamMax == 5
                ? "bg-black text-slate-50 shadow-[0_0_6px_2px_rgb(14,165,233)] "
                : "bg-slate-50 text-black "
            }`}
          >
            ALL
          </button>
          <button
            id="easy-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                difficultyParamMin: 1,
                difficultyParamMax: 2,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-emerald-400 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.difficultyParamMin == 1 &&
              selectedParams.difficultyParamMax == 2
                ? "bg-emerald-400 text-emerald-800 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : "bg-slate-50 text-emerald-500"
            }`}
          >
            Easy
          </button>
          <button
            id="medium-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                difficultyParamMin: 2,
                difficultyParamMax: 4,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-orange-300 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.difficultyParamMin == 2 &&
              selectedParams.difficultyParamMax == 4
                ? "bg-orange-300 text-orange-600 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : " bg-slate-50 text-orange-500 "
            }`}
          >
            Medium
          </button>
          <button
            id="hard-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                difficultyParamMin: 4,
                difficultyParamMax: 5,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-red-400 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.difficultyParamMin == 4 &&
              selectedParams.difficultyParamMax == 5
                ? " bg-red-400 text-red-800 shadow-[0_0_6px_2px_rgb(14,165,233)] "
                : " bg-slate-50 text-red-500  "
            }`}
          >
            Hard
          </button>
        </div>
        {/* ----------------- COST FILTERS ---------------- */}
        <div className="w-full py-4 flex justify-center items-center gap-1">
          <h2 className="text-md lg:text-xl xl:text-2xl font-bold font-redhat text-right mr-2 lg:mr-4">
            Cost
          </h2>
          <button
            id="allCost-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                costParamMin: 1,
                costParamMax: 5,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-black font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.costParamMin == 1 &&
              selectedParams.costParamMax == 5
                ? "bg-black text-slate-50 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : "bg-slate-50 text-black "
            }`}
          >
            ALL
          </button>
          <button
            id="Expensive-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                costParamMin: 1,
                costParamMax: 2,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-teal-500 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.costParamMin == 1 &&
              selectedParams.costParamMax == 2
                ? "bg-teal-500 text-teal-700 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : "bg-slate-50 text-teal-500"
            }`}
          >
            Cheap
          </button>
          <button
            id="moderate-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                costParamMin: 2,
                costParamMax: 4,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.costParamMin == 2 &&
              selectedParams.costParamMax == 4
                ? " bg-blue-100 text-blue-700 border-blue-100 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : " bg-slate-50 text-blue-400 border-blue-400"
            }`}
          >
            Moderate
          </button>
          <button
            id="expensive-filter-button"
            onClick={() => {
              setSelectedParams({
                ...selectedParams,
                costParamMin: 4,
                costParamMax: 5,
              });
            }}
            className={`p-1 lg:p-2 rounded-md border-2 border-amber-300 font-redhat text-md md:text-lg lg:text-xl font-bold ${
              selectedParams.costParamMin == 4 &&
              selectedParams.costParamMax == 5
                ? "bg-amber-300 text-amber-700 shadow-[0_0_6px_2px_rgb(14,165,233)]"
                : " bg-amber-50 text-amber-400"
            }`}
          >
            Expensive
          </button>
        </div>

        <div className="w-full mx-auto flex justify-evenly items-center">
          {/* -------------SERVINGS INPUT ------------------------------ */}
          <div id="servings-input" className="flex items-center">
            <h2 className="text-md lg:text-xl xl:text-2xl font-bold font-redhat text-right mr-1 lg:mr-2">
              Servings
            </h2>
            <div className="h-auto w-fit py-1 lg:py-2 pr-1 lg:pr-2 rounded-md flex justify-between items-center bg-slate-200">
              <div className="h-1/2 w-1 bg-slate-900 mr-1 lg:mr-2 text-slate-900">
                |
              </div>
              <input
                type="number"
                name="Servings Input"
                id="servings-input"
                value={selectedParams.servings}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setSelectedParams({
                    ...selectedParams,
                    servings: value,
                  });
                }}
                className="w-12 text-right bg-slate-50 p-1 lg:p-2 rounded-sm border border-slate-600 mr-1 lg:mr-2 text-md lg:text-xl xl:text-2xl font-bold font-redhat outline-none appearance-none"
              />
              <FaUserAlt size={inputIconSize} className="" />
              <div className=" flex flex-col align-center mx-1 lg:mx-2">
                <button
                  className=" h-full bg-sky-600 text-slate-100 border-2 border-sky-600 hover:border-slate-200 hover:bg-sky-500 p-1 lg:p-2  mx-1 mt-auto rounded-t-md"
                  onClick={() => {
                    setSelectedParams({
                      ...selectedParams,
                      servings: selectedParams.servings + 1,
                    });
                  }}
                >
                  <FaChevronUp size={inputIconSize / 2} />
                </button>
                <button
                  className="h-full bg-sky-800 text-slate-100 border-2 border-sky-800 hover:border-slate-200 hover:bg-sky-900 p-1 lg:p-2 mx-1 mb-auto rounded-b-md"
                  onClick={() => {
                    setSelectedParams({
                      ...selectedParams,
                      servings:
                        selectedParams.servings <= 1
                          ? 1
                          : selectedParams.servings - 1,
                    });
                  }}
                >
                  <FaChevronDown size={inputIconSize / 2} />
                </button>
              </div>
            </div>
          </div>

          {/* -------------TIME INPUT ------------------------------ */}
          <div id="time-input" className="flex items-center">
            <h2 className="text-md lg:text-xl xl:text-2xl font-bold font-redhat text-right mr-1 lg:mr-2">
              Time
            </h2>

            <div className="h-auto w-fit  py-1 lg:py-2 pr-1 lg:pr-2 rounded-md flex justify-between items-center bg-slate-200">
              <div className="h-1/2 w-1 bg-slate-900 mr-1 lg:mr-2 text-slate-900">
                |
              </div>
              <input
                type="number"
                name="Time Input"
                id="timeMax-input"
                value={selectedParams.timeMax}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setSelectedParams({
                    ...selectedParams,
                    timeMax: value,
                  });
                }}
                className="w-20 text-right bg-slate-50 p-1 lg:p-2 rounded-sm border border-slate-600 mr-1 lg:mr-2 text-md lg:text-xl xl:text-2xl font-bold font-redhat outline-none appearance-none"
              />
              <h3 className="text-md lg:text-xl xl:text-2xl font-bold font-redhat text-right mr-2 lg:mr-4">
                mins
              </h3>
              <div className=" flex flex-col align-center mx-1 lg:mx-2">
                <button
                  className=" h-full bg-sky-600 text-slate-100 border-2 border-sky-600 hover:border-slate-200 hover:bg-sky-500 p-1 lg:p-2  mx-1 mt-auto rounded-t-md"
                  onClick={() => {
                    setSelectedParams({
                      ...selectedParams,
                      timeMax: selectedParams.timeMax + 10,
                    });
                  }}
                >
                  <FaChevronUp size={inputIconSize / 2} />
                </button>
                <button
                  className="h-full bg-sky-800 text-slate-100 border-2 border-sky-800 hover:border-slate-200 hover:bg-sky-900 p-1 lg:p-2 mx-1 mb-auto rounded-b-md"
                  onClick={() => {
                    setSelectedParams({
                      ...selectedParams,
                      timeMax:
                        selectedParams.timeMax <= 10
                          ? 10
                          : selectedParams.timeMax - 10,
                    });
                  }}
                >
                  <FaChevronDown size={inputIconSize / 2} />
                </button>
              </div>
            </div>
          </div>
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
