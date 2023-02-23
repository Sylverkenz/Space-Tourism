import React from "react";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import {Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
      <article>
        <Header />
        <AnimatePresence mode="wait">
        <Routes  location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </AnimatePresence>
      </article>
  );
}

export default App;
