import React, { useContext, useState } from "react";
import { destination, crew, techs, techs2 } from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [places, setPlaces] = useState(destination);
  const [guides, setGuides] = useState(crew);
  const [tech, setTech] = useState(techs);
  const [tech2, setTech2] = useState(techs2);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDestTab, setCurrentDestTab] = useState(0);
  const [currentCrewTab, setCurrentCrewTab] = useState(0);
  const [currentTechTab, setCurrentTechTab] = useState(0);
  const [currentTech2Tab, setCurrentTech2Tab] = useState(0);

  const curDestination = places.find((p) => p.id === currentDestTab);
  const curGuide = guides.find((p) => p.id === currentCrewTab);
  const curTechnology = tech.find((t) => t.id === currentTechTab);
  const curTechnology2 = tech2.find((t) => t.id === currentTechTab);

  function destHandler(id) {
    setCurrentDestTab(id);
  }

  function crewHandler(id) {
    setCurrentCrewTab(id);
  }
  function techHandler(id) {
    setCurrentTechTab(id);
  }

  return (
    <AppContext.Provider
      value={{
        places,
        setPlaces,
        guides,
        setGuides,
        tech,
        setTech,
        tech2,
        setTech2,
        destHandler,
        crewHandler,
        techHandler,
        isOpen,
        setIsOpen,
        crew,
        currentDestTab,
        setCurrentDestTab,
        curDestination,
        currentCrewTab,
        setCurrentCrewTab,
        curGuide,
        currentTechTab,
        currentTech2Tab,
        setCurrentTechTab,
        curTechnology,
        curTechnology2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobaContext() {
  return useContext(AppContext);
}
