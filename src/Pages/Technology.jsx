import React from 'react'
import { motion } from 'framer-motion';
import { pageAnim } from '../animations';
import { Slide2 } from '../Components';
import { useGlobaContext } from '../context';

function Technology() {
    const { tech, tech2, } = useGlobaContext();
  
    return (
      <motion.div variants={pageAnim} initial="hidden"  animate="show" exit="exit" className="content content--technology pt-[8rem] md:pt-[14rem]  lg:pt-[16rem]  pb-[10rem] lg:pb-0  pr-0 ">
        <h2 className="heading5 text-center  mb-[3rem] lg:mb-0 md:text-left md:px-[4rem] lg:px-0">
          <span className="opacity-25 mr-8 ">03</span>
          space launch 101
        </h2>
        <div className="tech__content items-center gap-[6rem] h-[42rem] relative  hidden lg:flex">
          <Slide2 />
          {tech.map((tech) => {
            const { id, image, desc, name } = tech;
            return (
              <article key={id} className="flex  items-center">
                <div className="tech__info w-[60%]">
                  <h3 className="font-Barlow text-secondary text-[1.6rem] uppercase tracking-wide">
                    The technology...
                  </h3>
                  <h4 className="heading3">{name}</h4>
                  <p className="bodytext w-[70%]">{desc}</p>
                </div>
                <div className="tech__img w-[42rem] h-[42rem] absolute right-0 top-0">
                  <img src={image} alt="" className="w-[100%] h-[100%]" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="tech__content lg:hidden flex flex-col items-center gap-[3rem] h-[42rem] ">
          <Slide2 />
          {tech2.map((tech) => {
            const { id, image, desc, name } = tech;
            return (
              <article key={id} className="flex  flex-col-reverse items-center text-center gap-12 ">
                <div className="tech__info md:w-[60%]">
                  <h3 className="font-Barlow text-secondary text-[1.6rem] uppercase tracking-wide">
                    The technology...
                  </h3>
                  <h4 className="heading3">{name}</h4>
                  <p className="bodytext">{desc}</p>
                </div>
                <div className="tech__img w-full ">
                  <img src={image} alt="" className="w-full h-[17rem] md:h-[30rem]" />
                </div>
              </article>
            );
          })}
        </div>
      </motion.div>
    );
  }

export default Technology