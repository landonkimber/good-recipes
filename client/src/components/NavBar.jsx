import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ChefIcon from "/chef-white-circle.svg";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const screenWith = window.innerWidth;

  const titleStyle =
    screenWith < 768 ? "text-3xl h-[12vh]" : "text-7xl h-[14vh]";

  // const NavHeight = screenWith < 768 ? "h-[17vh]" : "h-[22vh]"; KEEPING THIS CAUSE IT SHOWS THE TOTAL HEIGHTS
  const AwningHeight = screenWith < 768 ? "h-[13.6vh]" : "h-[17.5vh]";
  const [stripeCount, setStripeCount] = useState(4); // Default for desktop

  // Update stripe count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStripeCount(6);
      } else if (window.innerWidth < 1024) {
        setStripeCount(10);
      } else {
        setStripeCount(16);
      }
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // TAILWIND CSS STYLES
  const AwningBottomStyle =
    "h-full w-full rounded-b-full shadow-inset-sides relative z-[41] after:absolute after:inset-0 after:box-border after:border-b-2 after:border-l-2 after:border-r-2 after:rounded-b-full after:border-dashed after:pointer-events-none after:-translate-y-[2px] after:z-[41]";
  const AwningTopStyle =
    "h-full w-full relative shadow-inset-sides after:absolute after:inset-0 after:box-border after:border-l-2 after:border-r-2 after:border-dashed after:pointer-events-none after:-translate-y-[2px]";

  const stripeArray = Array.from({ length: stripeCount }, (_, index) => {
    const isEven = index % 2 === 0;
    const stripeColor = isEven ? "bg-red-500" : "bg-zinc-50";
    return (
      <div
        key={`top-${index}`}
        className={`${stripeColor} ${AwningTopStyle}`}
      />
    );
  });

  const bottomStripeArray = Array.from({ length: stripeCount }, (_, index) => {
    const isEven = index % 2 === 0;
    const stripeColor = isEven ? "bg-red-600" : "bg-zinc-100";
    const stitchColor = isEven
      ? "after:border-red-800"
      : "after:border-slate-300";
    return (
      <div
        key={`bottom-${index}`}
        className={`${stripeColor} ${AwningBottomStyle} ${stitchColor}`}
      />
    );
  });

  return (
    <div className={`relative top-0 left-0 w-full z-40 ${AwningHeight}`}>
      {/* AWNING */}
      <div className="absolute w-full grid-rows-2">
        <div
          id="top-awning"
          className="relative w-full h-[17.5vh] flex items-center"
        >
          {stripeArray}
        </div>
        <div
          id="bottom-awning"
          className="relative w-full h-[5vh] flex items-center"
        >
          {bottomStripeArray}
        </div>
      </div>

      {/* CONTENT */}
      <div
        id="navbar-content"
        className="relative h-full flex items-center justify-evenly"
      >
        <Link to="/">
          <img
            src={ChefIcon}
            alt="Chef-Logo"
            className="h-[9vh] z-40 hover:scale-110 transition"
          />
        </Link>
        <Link to="/">
          <h1
            className={`flex whitespace-nowrap underline decoration-yellow-300 p-2 bg-sky-900 rounded-lg font-lobster text-amber-500 font-bold items-center justify-center z-40 px-[2vw] ${titleStyle} transition hover:scale-[105%]`}
          >
            &nbsp;*&nbsp;Good Recipes&nbsp;*&nbsp;
          </h1>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center bg-amber-500 text-sky-900 h-[9vh] w-[9vh] rounded-full hover:scale-110 transition"
        >
          <FaBars className="h-1/2 w-1/2" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <div className="z-2"> */
}
{
  /* Left streetlight glow */
}
{
  /* <div className="absolute left-1/4 transform -translate-x-1/2 -translate-y-[vh13] w-[15vw] h-[15vw] bg-yellow-400 rounded-full blur-3xl opacity-40" /> */
}
{
  /* <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-[vh11] w-[15vw] h-[15vw] bg-yellow-400 rounded-full blur-3xl opacity-60" /> */
}
{
  /* Right streetlight glow */
}
{
  /* <div className="absolute right-1/4 transform translate-x-1/2 -translate-y-[vh13] w-[15vw] h-[15vw] bg-yellow-400 rounded-full blur-3xl opacity-50" /> */
}
{
  /* </div> */
}
