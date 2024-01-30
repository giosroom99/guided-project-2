import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/home";
import Films from "./film/films";
import Planets from "./planet/planets";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Films />} />
        <Route path="/planet" element={<Planets planet_id={1} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
