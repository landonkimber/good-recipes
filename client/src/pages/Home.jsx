import ChefLogo from "/chef-white-circle.svg";
import HeroImage from "/pexels-hero-image.jpg";

import { useState } from "react";

const Home = () => {
  const [showExploreOptions, setShowExploreOptions] = useState(false);

  return (
    <main className="bg-sky-50 min-h-screen">
      <div className="relative w-full h-[66vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={HeroImage}
          alt="Hero image from pexels"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />

        {/* Overlay Content Box */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="bg-white/70 backdrop-blur-md rounded-md flex flex-row w-full max-w-6xl p-8 md:p-12 gap-8">
            {/* Left: Logo + Title */}
            <div className="flex flex-col items-center justify-center w-1/2 text-sky-900 gap-6">
              <img
                src={ChefLogo}
                alt="Chef Logo"
                className="w-32 h-32 md:w-36 md:h-36"
              />

              <h1 className="text-5xl md:text-6xl font-lobster text-sky-900 text-center">
                Good Recipes
              </h1>
            </div>
            <div className="h-ful w-1 bg-sky-900 rounded-full"></div>
            {/* Right: Intro Text */}
            <div className="md:w-1/2 flex items-center justify-center text-center md:text-left">
              <p className="text-lg md:text-xl font-roboto text-sky-800 drop-shadow-sm">
                Discover comforting meals, rich flavors, and easy-to-follow
                recipes! From quick weeknight dinners to indulgent weekend
                feasts, Good Recipes has foods to satisfy every at home chef!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div id="explore-guide" className="flex flex-row bg-gray-50">
          <h2 className="font-lobster text-sky-900 text-5xl">Explore </h2>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Where Recipe Posts will go! */}
        <div id="explore-page"></div>
      </div>
    </main>
  );
};

export default Home;
