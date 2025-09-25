import ChefLogo from "/chef-white-circle.svg";
import HeroImage from "/pexels-hero-image.jpg";

import { useState } from "react";

import Explore from "../components/Explore.jsx";

const Home = () => {
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
          <div className="bg-gray-800/50 h-[50%] backdrop-blur-md rounded-md flex flex-row w-full max-w-7xl p-8 md:p-12 gap-8">
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
            <div className="h-full w-1 bg-sky-900 rounded-full"></div>
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
      <div className="relative w-[100vw] h-6 bg-gradient-to-t from-stone-700 to-slate-300 drop-shadow-lg z-20"></div>
      <div className="relative flex justify-center items-center  bg-[length:100%]  bg-repeat-y bg-[url(/bricks.jpg)] bg-top w-full ">
        <div className="absolute h-full w-[100vw] bg-stone-900 bg-opacity-70 bg-cover backdrop-blur-[2px]"></div>
        <Explore />
      </div>
    </main>
  );
};

export default Home;
