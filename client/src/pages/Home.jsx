import ChefLogo from "/chef-white-circle.svg";
import HeroImage from "/pexels-hero-image.jpg";
import GlobeIcon from "/globe.svg";

import tuscana from "/tuscana.jpg";
import recipes from "../data/recipes.json";

import { useState } from "react";

const Home = () => {
  const RecipeCard = ({ r }) => (
    <div className="bg-slate-100/90 rounded-md border border-slate-200 overflow-hidden hover:shadow-md transition">
      <img src={tuscana} alt={r.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-sky-900">{r.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-3 mt-1">
          {r.description}
        </p>
        <div className="flex items-center gap-3 text-slate-700 text-sm mt-3">
          <span className="px-2 py-0.5 rounded bg-sky-100">{r.totalTime}</span>
          <span className="px-2 py-0.5 rounded bg-emerald-100">
            {r.servings} servings
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-100">
            {r.difficultyDesc}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-sky-50 min-h-screen">
      <div className="relative w-full h-[66vh] overflow-hidden">
        {/* Background Image */}
        {/* <img
          src={HeroImage}
          alt="Hero image from pexels"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        /> */}

        {/* Overlay Content Box */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="bg-gray-400/50 h-[50%] backdrop-blur-md rounded-md flex flex-row w-full max-w-7xl p-8 md:p-12 gap-8">
            {/* Left: Logo + Title */}
            <div className="flex flex-col items-center justify-center w-1/2 text-sky-900 gap-6">
              <img
                src={ChefLogo}
                alt="Chef Logo"
                className="w-32 h-32 md:w-36 md:h-36"
              />

              <h1 className="text-5xl md:text-6xl font-lobster text-sky-100 text-center">
                Good Recipes
              </h1>
            </div>
            <div className="h-ful w-1 bg-sky-900 rounded-full"></div>
            {/* Right: Intro Text */}
            <div className="md:w-1/2 flex items-center justify-center text-center md:text-left">
              <p className="text-lg md:text-xl font-roboto text-sky-100 drop-shadow-sm">
                Discover comforting meals, rich flavors, and easy-to-follow
                recipes! From quick weeknight dinners to indulgent weekend
                feasts, Good Recipes has foods to satisfy every at home chef!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[100vw] h-6 bg-gradient-to-t from-stone-400 to-slate-200 drop-shadow-lg z-30"></div>
      <div className="relative flex justify-center items-center  bg-[length:100%] bg-cover bg-repeat-y bg-[url(/bricks.jpg)] bg-top w-full ">
        <div className="absolute h-full w-[100vw] bg-amber-700 bg-opacity-30 bg-cover backdrop-blur-xs"></div>
        <div
          id="explore-guide"
          className="relative flex flex-col max-w-7xl z-20"
        >
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            {recipes.map((r, i) => (
              <RecipeCard key={i} r={r} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
