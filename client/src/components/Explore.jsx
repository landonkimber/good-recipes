import { useState } from "react";
import tuscana from "/tuscana.jpg";
import recipes from "../data/recipes.json";
import GlobeIcon from "/globe.svg";

import { FaDollarSign, FaHeart, FaStar } from "react-icons/fa";

import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

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

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        role="dialog"
        aria-modal="true"
        onClick={onClose} // close when clicking overlay
      >
        <div
          className="relative bg-slate-800 rounded-md min-w-[72rem] h-[80vh] shadow-md shadow-indigo-400/50 p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking content
        >
          <button
            onClick={onClose}
            className="absolute h-12 w-12 top-2 right-2 px-3 py-1 bg-red-700 font-bold text-md text-white rounded-full border-2 border-red-700 hover:bg-white hover:text-red-700"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative rounded-sm bg-slate-300 left-16 p-4 w-fit z-30">
            <h2 className="text-4xl text-slate-900 font-redhat font-bold">
              {recipe.title}
            </h2>
          </div>
          <div className="absolute left-0 top-16 w-full h-1/2">
            {/* Image */}
            <img
              src={tuscana}
              alt={recipe.title}
              className="absolute h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute h-full w-full bg-slate-800/80 backdrop-blur-md pointer-events-none z-10" />
          </div>
          <img
            src={tuscana}
            alt={recipe.title}
            className="absolute left-1/2 -translate-x-1/2 top-16 h-1/2 w-auto z-20 transform scale-[110%] rounded-md"
          />
          <div>
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
        </div>
      </div>
    </ModalPortal>
  );
};

const Explore = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const RecipeCard = ({ r, onClick }) => (
    <div
      className="relative group bg-slate-200/60 rounded-sm overflow-hidden hover:shadow-md hover:shadow-slate-400 transition hover:bg-slate-100/80 hover:border-2 hover:border-sky-300 cursor-pointer"
      onClick={() => onClick(r)}
    >
      <img
        src={tuscana}
        alt={r.title}
        className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
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
        <div className="flex items-center gap-3 text-sky-900 text-sm mt-3">
          <span className="px-2 py-1 rounded bg-sky-200">{r.totalTime}</span>
          <span className="px-2 py-1 rounded bg-emerald-200">
            {r.servings} servings
          </span>
          <span className="px-2 py-1 rounded bg-amber-200">
            {r.difficultyDesc}
          </span>
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

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default Explore;
