import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HomeStyle from "./pages/HomeStyled";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* TODO v - Fix the className on main so that it ALWAYS lines up with the navbar. Its being weird rn, I can't just switch the height and the padding top. */}
      <main className={`bg-white pt-[13vh] border border-red-500`}>
        <Routes>
          <Route path="/" element={<HomeStyle />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
