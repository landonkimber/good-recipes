import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ChefIcon from "/chef-white-circle.svg";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaCog,
  FaTimes,
} from "react-icons/fa";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const NavHeight = screenWith < 768 ? "h-[17vh]" : "h-[22vh]"; KEEPING THIS CAUSE IT SHOWS THE TOTAL HEIGHTS
  // const AwningHeight = screenWith < 768 ? "h-[13.6vh]" : "h-[17.5vh]";
  const isMobile = window.innerWidth < 768 ? true : false;

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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // TAILWIND CSS STYLES
  const AwningBottomStyle =
    "h-full w-full rounded-b-full shadow-inset-sides relative z-[51] after:absolute after:inset-0 after:box-border after:border-b-2 after:border-l-2 after:border-r-2 after:rounded-b-full after:border-dashed after:pointer-events-none after:-translate-y-[2px] after:z-[51]";
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
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-40 ${
        showNavbar
          ? "translate-y-0"
          : isMobile
          ? "-translate-y-[13.6vh]"
          : "-translate-y-[17.5vh]"
      }`}
    >
      <div
        className={`relative top-0 left-0 w-full z-50 ${
          isMobile ? "h-[13.6vh]" : "h-[17.5vh]"
        }`}
      >
        {/* AWNING */}
        <div className="absolute w-full grid-rows-2">
          <div
            id="top-awning"
            className={`relative w-full ${
              isMobile ? "h-[13.6vh]" : "h-[17.5vh]"
            } flex items-center`}
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
              className={`flex whitespace-nowrap underline decoration-yellow-300 p-2 bg-sky-900 rounded-lg font-lobster text-amber-500 font-bold items-center justify-center z-40 px-[2vw] ${
                isMobile ? "text-3xl h-[12vh]" : "text-7xl h-[14vh]"
              } transition hover:scale-[105%]`}
            >
              &nbsp;*&nbsp;Good Recipes&nbsp;*&nbsp;
            </h1>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center justify-center bg-amber-500 text-sky-900 h-[7.5vh] w-[7.5vh] rounded-full hover:scale-110 transition"
          >
            {menuOpen ? (
              <FaTimes className="h-1/2 w-1/2" />
            ) : (
              <FaBars className="h-1/2 w-1/2" />
            )}
          </button>
        </div>
        <div
          className={`
    fixed right-0 z-50 transform transition-transform duration-300 ease-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    ${isMobile ? "w-full h-[60vh]" : "w-[50vw] h-[40vh] max-w-[720px]"}
    rounded-md shadow-lg bg-slate-50 p-4
  `}
          role="dialog"
          aria-modal="true"
          aria-hidden={!menuOpen}
        >
          <ul className="relative flex flex-col pt-[5vh] h-full text-3xl text-center text-slate-800 font-semibold font-sriracha">
            <li className="relative h-1/4 w-full">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full h-full underline transition hover:bg-slate-700 hover:text-slate-50 hover:scale-[1.05]"
                aria-label="Home"
              >
                <FaHome className="h-12 w-12 p-2" />
                <span>Home</span>
              </Link>
            </li>

            <li className="relative h-1/4 w-full">
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full h-full underline transition hover:bg-slate-700 hover:text-slate-50 hover:scale-[1.05]"
                aria-label="About"
              >
                <FaInfoCircle className="h-12 w-12 p-2" />
                <span>About</span>
              </Link>
            </li>

            <li className="relative h-1/4 w-full">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full h-full underline transition hover:bg-slate-700 hover:text-slate-50 hover:scale-[1.05]"
                aria-label="Contact"
              >
                <FaEnvelope className="h-12 w-12 p-2" />
                <span>Contact</span>
              </Link>
            </li>

            <li className="relative h-1/4 w-full">
              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full h-full underline transition hover:bg-slate-700 hover:text-slate-50 hover:scale-[1.05]"
                aria-label="Settings"
              >
                <FaCog className="h-12 w-12 p-2" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
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
