import { useState } from "react";
import recipes from "../data/recipes.json";
import GlobeIcon from "/globe.svg";

import ExploreModal from "./ExploreModal";

const Explore = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
      <div className="px-4 pb-2">
        <div className="bg-slate-700 p-2 -translate-y-1/2 rounded-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-sky-400">
          <h3 className="text-2xl font-semibold font-redhat text-sky-50 ">
            {r.title}
          </h3>
        </div>

        <div className="-mt-2 h-[2px] w-1/2 bg-sky-600 transition-transform duration-300 group-hover:scale-105 group-hover:bg-sky-400" />
        <p className="text-slate-600 text-md font-redhat line-clamp-3 mt-1 transition-transform duration-300 group-hover:scale-105">
          {r.description}
        </p>
        <div className="flex gap-2 text-sky-900 text-md mt-3">
          <p className="px-2 py-1 font-redhat rounded bg-sky-300">
            {r.totalTime}
          </p>
          <p className="px-2 py-1 font-redhat rounded bg-emerald-300">
            {r.servings} servings
          </p>
          <p className="px-2 py-1 font-redhat rounded bg-amber-300">
            {r.difficultyDesc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="explore-guide" className="relative flex flex-col max-w-7xl z-20">
      <div id="explore-nav" className="flex items-center w-full h-[8vh]">
        <img
          src={GlobeIcon}
          alt="Globe icon"
          className="relative h-16 font-bold text-slate-100"
        />
        <h2 className="font-lobster font-bold text-slate-100 text-6xl">
          Explore
        </h2>
      </div>

      <div
        id="explore-recipes-container"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 bg-gradient-to-bl from-slate-600/60 to-slate-700/80 rounded-md p-12"
      >
        {recipes.map((r, i) => (
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
