import React, { useState, useEffect } from "react";

import ChefIcon from "/chef-white-circle.svg";

const NavBar = () => {
  const screenWith = window.innerWidth;

  const titleSize = screenWith < 768 ? "text-5xl" : "text-7xl"; //
  const [stripeCount, setStripeCount] = useState(4); // Default for desktop

  // Update stripe count based on screen width
  useEffect(() => {
    const handleResize = () => {
      setStripeCount(window.innerWidth < 768 ? 8 : 16); // Fewer on mobile
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // TAILWIND CSS STYLES
  const AwningBottomStyle =
    "h-full w-full rounded-b-full shadow-inset-sides relative z-1 after:absolute after:inset-0 after:box-border after:border-b-2 after:border-l-2 after:border-r-2 after:rounded-b-full after:border-dashed after:pointer-events-none after:-translate-y-[2px] after:z-1";
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
    <div className="fixed w-full flex justify-center z-50">
      {/* <h3
          style={{
            textShadow: "2px 2px 6px rgba(85, 7, 7, 0.32)",
            WebkitTextStroke: "1px white", // <-- White text outline
          }}
          className={`fixed underline decoration-yellow-300 flex p-2 h-[12vh] w-fit min-w-250 font-lobster text-amber-500 font-bold items-center justify-center pb-8 mt-8 bg-slate-200 z-10 border-teal-700 border-4 rounded-t-2xl shadow-inset-md after:shadow-b-lg  
  ${titleSize}`}
        >
          <div className="w-[2rem]"></div>
          &nbsp;*&nbsp;Good Recipes&nbsp;*&nbsp;
          <div className="w-[2rem]"></div>
        </h3> */}
      <img
        src={ChefIcon}
        alt="Chef-Logo"
        className="fixed left-[15vw] top-[1vh] h-40 w-40 z-10"
      />
      <h1
        style={{
          textShadow: "2px 2px 6px rgba(85, 7, 7, 0.32)",
          WebkitTextStroke: "1px white", // <-- White text outline
        }}
        className="fixed flex underline decoration-yellow-300 text-8xl p-2 h-[14vh] bg-sky-600 rounded-b-lg items-center w-fit min-w-250 font-lobster text-amber-500 font-bold items-center justify-center z-10 px-[3vw]"
      >
        {" "}
        &nbsp;*&nbsp;Good Recipes&nbsp;*&nbsp;
      </h1>
      <div className="fixed w-full grid-rows-2">
        <div
          id="top-awning"
          className="relative w-full h-[17.5vh]  flex items-center"
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
