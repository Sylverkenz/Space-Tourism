import React, { useContext, useState, useRef } from "react";
import { destination,crew, techs, techs2 } from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [places, setPlaces] = useState([destination[0]]);
  const [guides, setGuides] = useState([crew[1]]);
  const [tech, setTech] = useState([techs[0]]);
  const [tech2, setTech2] = useState([techs2[0]])
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const buttons = useRef(null);

  function active(id) {
    const allButtons = buttons.current.childNodes;
    allButtons.forEach((element) => element.classList.remove("active"));
    allButtons[id].classList.add("active");
  }

  function destHandler(id) {
    setPlaces([destination[id]]);
    active(id);
  }

  function crewHandler(id) {
    setGuides([crew[id]]);
    active(id);
  }
  function techHandler(id) {
    setTech([techs[id]]);
    setTech2([techs2[id]]);
    active(id);
  }

  return (
    <AppContext.Provider
      value={{
        places,
        setPlaces,
        guides,
        setGuides,
        tech,
        setTech,tech2,
        setTech2,
        destHandler,
        crewHandler,
        techHandler,
        buttons,
        isOpen,
        setIsOpen,
        index,
        setIndex,
        crew,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobaContext() {
  return useContext(AppContext);
}
