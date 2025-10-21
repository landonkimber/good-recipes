import ChefLogo from "/chef-white-circle.svg";
import HeroImage from "/pexels-hero-image.jpg";

import { useState } from "react";

import Explore from "../components/Explore.jsx";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <main className="bg-sky-50 min-h-screen overflow-x-hidden">
      <div className="relative w-full h-[66vh] overflow-x-hidden">
        {/* Background Image */}
        {/* <img
          src={HeroImage}
          alt="Hero image from pexels"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        /> */}

        {/* Overlay Content Box */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="bg-gray-800/50 h-[60%] md:h-[50%] backdrop-blur-md rounded-md flex flex-col md:flex-row sm:flex-col w-full max-w-7xl p-4">
            {/* Left: Logo + Title */}
            <div className="flex flex-col md:w-[50%] sm:w-full items-center justify-center text-sky-900">
              <img src={ChefLogo} alt="Chef Logo" className="w-32 h-32" />

              <h1 className="text-3xl lg:text-5xl sm:text-3xl font-lobster text-sky-100 text-center my-4">
                Good Recipes
              </h1>
            </div>
            <div className="w-full h-1 mb-2 md:h-full sm:w-full md:w-1 sm:h-1 bg-sky-900 rounded-full"></div>
            {/* Right: Intro Text */}
            <div className="flex w-full h-1/2 md:h-full md:w-[50%] sm:w-full items-center justify-center text-center">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto text-sky-100">
                Discover comforting meals, rich flavors, and easy-to-follow
                recipes! From quick weeknight dinners to indulgent weekend
                feasts, Good Recipes has foods to satisfy every at home chef!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-6 bg-gradient-to-t from-stone-700 to-slate-300 drop-shadow-lg z-20"></div>
      <div className="relative flex justify-center items-center  bg-[length:100%]  bg-repeat-y bg-[url(/bricks.jpg)] bg-top w-full ">
        <div className="absolute h-full w-full bg-stone-900 bg-opacity-70 bg-cover backdrop-blur-[2px]"></div>
        <Explore />
      </div>
    </main>
  );
};

export default Home;
