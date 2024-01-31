import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/home";
import ImageBanner from "./home/ImageBanner";

import Films from "./film/films";
import Planets from "./planet/planets";
import Character from "./character/character";

function App() {
  return (
    <BrowserRouter>
      <ImageBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:filmID" element={<Films />} />
        <Route path="/planet/:planetID" element={<Planets />} />
        <Route path="/character/:characterID" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
