import React, { useEffect } from "react";
import { useGlobaContext } from "./context";
import { tabs, slide2 } from "./data";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { isOpen, setIsOpen } = useGlobaContext();

  function navHandler() {
    setIsOpen(false);
  }

  return (
    <nav className={isOpen ? `nav open` : `nav`}>
      <NavLink to="/" className="navtext navlinks" onClick={navHandler}>
        <span className="font-[700] mr-[1.4rem]">00</span>
        home
      </NavLink>

      <NavLink
        to="/destination"
        className="navtext navlinks"
        onClick={navHandler}
      >
        <span className="font-[700] mr-[1.4rem]">01</span>
        destination
      </NavLink>

      <NavLink to="/crew" className="navtext navlinks" onClick={navHandler}>
        <span className="font-[700] mr-[1.4rem]">02</span>
        crew
      </NavLink>

      <NavLink
        to="/technology"
        className="navtext navlinks"
        onClick={navHandler}
      >
        <span className="font-[700] mr-[1.4rem]">03</span>
        technology
      </NavLink>
    </nav>
  );
};

const Tabs = () => {
  const { destHandler, currentDestTab } = useGlobaContext();

  return (
    <div className="flex gap-[3.5rem] w-[37]">
      {tabs.map((tab) => {
        const { id, name } = tab;
        return (
          <button
            key={id}
            className={
              id === currentDestTab
                ? "tabBtn navtext active"
                : "tabBtn navtext "
            }
            onClick={() => destHandler(id)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

const DestinationPictures = ({ states }) => {
  const { img, title } = states;
  return (
    <figure className=" lg:w-[60%]">
      <img
        key={title}
        src={img}
        alt={title}
        className="destination__imgbox w-[17rem] md:w-[30rem] lg:w-[41rem] xlg:w-[39rem] min-h-[16rem] lg:h-[100%] mx-auto"
      />
    </figure>
  );
};

function Slide1() {
  const { crewHandler, buttons } = useGlobaContext();
  useEffect(() => {
    buttons.current.childNodes[0].classList.add("active");
    crewHandler(0);
  }, []);

  return (
    <div
      className="lg:flex gap-[2.2rem] absolute hidden sm:bottom-[32rem] md:bottom-[4rem] left-[33%] md:left-0  lg:left-[10rem] lg:z-10"
      ref={buttons}
    >
      {tabs.map((tab) => {
        const { id } = tab;
        return (
          <button
            key={id}
            className="slideBtn1"
            onClick={() => crewHandler(id)}
          ></button>
        );
      })}
    </div>
  );
}

function Slide2() {
  const { techHandler, buttons } = useGlobaContext();
  useEffect(() => {
    buttons.current.childNodes[0].classList.add("active");
    techHandler(0);
  }, []);
  return (
    <div className="flex lg:flex-col gap-[2.2rem]" ref={buttons}>
      {slide2.map((tech) => {
        const { id } = tech;
        return (
          <button
            key={id}
            className="slideBtn2 heading4"
            onClick={() => techHandler(id)}
          >
            {id + 1}
          </button>
        );
      })}
    </div>
  );
}

function Slide3() {
  const { techHandler, buttons, buttons2 } = useGlobaContext();
  useEffect(() => {
    buttons2.current.childNodes[0].classList.add("active");
    techHandler(0);
  }, []);
  return (
    <div className="flex lg:flex-col gap-[2.2rem]" ref={buttons2}>
      {slide2.map((tech) => {
        const { id } = tech;
        return (
          <button
            key={id}
            className="slideBtn3 heading4"
            onClick={() => techHandler(id)}
          >
            {id + 1}
          </button>
        );
      })}
    </div>
  );
}

export { Nav, Tabs, Slide1, Slide2, Slide3, DestinationPictures };
