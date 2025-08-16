import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import RecipePage from "./pages/RecipePage";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-[14vh]"
        }`}
      >
        <NavBar />
      </header>

      <main className={`pt-[13vh] border border-red-500`}>
        <div className="fixed flex pointer-events-none top-0 left-0 h-[100vh] w-[100vw] bg-[url(/pexels-hero-image.jpg)] bg-cover bg-top">
          <div className="relative h-auto w-[33vw] bg-gradient-to-r from-transparent to-slate-900/60 backdrop-blur-xs "></div>
          <div className="relative h-auto w-[33vw] bg-slate-900/60 backdrop-blur-xs "></div>
          <div className="relative h-auto w-[33vw] bg-gradient-to-l from-transparent to-slate-900/60 backdrop-blur-xs "></div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-page" element={<RecipePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
