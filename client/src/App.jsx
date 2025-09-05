import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainBG from "./components/MainBG";
import NavBar from "./components/NavBar";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <>
      <NavBar />

      <main className={`pt-[13vh] border border-red-500`}>
        <MainBG />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-page" element={<RecipePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
