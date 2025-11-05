import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes, useParams } from "react-router-dom";

import Home from "./pages/Home";
import MainBG from "./components/MainBG";
import NavBar from "./components/NavBar";
// import RecipePage from "./pages/RecipePage";
import RecipePage from "./pages/RECIPEPAGEMOBILE";

//Contact Pages
import Contact from "./pages/Contact";
import SubmitARecipe from "./pages/SubmitARecipe";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <NavBar />

      <main className={`pt-[13vh]`}>
        <MainBG />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-a-recipe" element={<SubmitARecipe />} />
          <Route path="contact-form" element={<ContactForm />} />

          <Route path="/:slug" element={<RecipePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
