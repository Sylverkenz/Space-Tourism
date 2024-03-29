import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";
import { useGlobaContext } from "../context";
import { Slide1 } from "../Components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Crew() {
  const {
    crew,
    curGuide,
    setCurrentCrewTab,
  } = useGlobaContext();

  const { id, image, position, desc, name } = curGuide;

  function nextHandler() {
    setCurrentCrewTab((index) => (index >= crew.length - 1 ? 0 : index + 1));
  }
  function prevHandler() {
    setCurrentCrewTab((index) => (index < 1 ? crew.length - 1 : index - 1));
  }
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="content content--crew pt-[10rem] md:pt-[16rem] xl:pt-[19rem] overflow-hidden pb-8 lg:pr-[8vw] relative px-[2rem]"
    >
      <h2 className="heading5 text-center md:text-left">
        <span className="opacity-25 mr-8">02</span>
        meet your crew
      </h2>
      <Slide1 />
      <article
        key={id}
        className="crew__content flex flex-col-reverse md:flex-col lg:flex-row items-center sm:gap-y-[7rem] gap-y-[3rem] relative md:mt-[3rem]"
      >
        <div className="crew__info md:w-[60%] text-center lg:text-left">
          <h3 className="heading4 opacity-50">{position}</h3>
          <h4 className="heading3">{name}</h4>
          <p className="bodytext lg:w-[60%]">{desc}</p>
        </div>
        <div className="crew__img w-full h-[28rem] md:h-[53rem] md:w-[45rem] lg:h-[51rem] lg:-mt-[5rem] border-b md:border-none mt-[2rem] border-[#979797]">
          <img
            src={image}
            alt={name}
            className="w-[50%] mx-auto md:w-[100%] h-[100%]"
          />
        </div>
        <div className="absolute top-[18%] sm:top-[20%] w-full h-[5rem] lg:hidden">
          <button className="dirbtns left-0" onClick={prevHandler}>
            <FaChevronLeft />
          </button>
          <button className="dirbtns right-0" onClick={nextHandler}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </motion.div>
  );
}

export default Crew;
