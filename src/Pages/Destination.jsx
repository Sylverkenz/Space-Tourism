import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";
import { useGlobaContext } from "../context";
import { Tabs, DestinationPictures } from "../Components";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Destination() {
  const { curDestination, currentDestTab } = useGlobaContext();
  const { id, img, title, desc, distance, travelTime } = curDestination;
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="content content--destination  pt-[8rem] md:pt-[14rem] lg:pt-[16rem] overflow-hidden px-8 md:pr-[8vw]"
    >
      <h2 className="heading5 mb-[rem]">
        <span className="opacity-25 mr-8">01</span>
        pick your destination
      </h2>

      <article className="destination__content py-4 xl:py-[12rem] flex flex-col gap-6 md:gap-[3rem] lg:flex-row justify-between">
        <DestinationPictures states={{ img, title }} />
        <article className="lg:absolute top-[30%] xl:top-[35%] right-[21rem] xlg:right-[25rem] mx-auto lg:mx-8 xl:mx-[13rem]">
          <Tabs />
        </article>
        <div
          key={currentDestTab}
          className="destination__info md:w-[90%] mx-auto lg:mx-0 w-full lg:w-[37%]  text-center lg:text-start lg:mt-16"
        >
          <h2 className="heading2">{title}</h2>
          <p className=" bodytext">{desc}</p>
          <span className="h-[1px] w-full block bg-[#383B4B] my-8"></span>
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-4 md:gap-[6rem]">
            <p className="subheading1">
              <span className="block subheading2">avg. distance</span>
              {distance}
            </p>

            <p className="subheading1">
              <span className="block subheading2">est. travel time</span>
              {travelTime}
            </p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default Destination;
