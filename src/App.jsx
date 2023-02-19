import React from "react";
import { Destinations, Crew, Technology } from "./Pages";
import { Nav } from "./Components";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <article>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </article>
    </BrowserRouter>
  );
}

export default App;