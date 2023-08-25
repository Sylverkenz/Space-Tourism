import React from "react";
import { Nav } from "./Components";
import { useGlobaContext } from "./context";

function Header() {
  const { isOpen, setIsOpen } = useGlobaContext();
  function navToggle() {
    setIsOpen(isOpen ? false : true);
  }
  return (
    <header
      className="flex justify-between items-start md:items-center
     pl-6 lg:pl-[5rem] md:pr-0 absolute top-6  md:top-1 lg:top-12 left-0 right-0 z-10 overflow-hidden h-[10rem]"
    >
      <img src="./shared/logo.svg" alt="" />
      <Nav />
      <button
        className={
          isOpen
            ? `hamburger hamburger--emphatic is-active`
            : `hamburger hamburger--emphatic`
        }
        type="button"
        onClick={navToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
}

export default Header;
