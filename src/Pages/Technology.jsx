import React from 'react'
import { useGlobaContext } from '../context';

function Technology() {
    const { tech, setTech } = useGlobaContext();
  
    return (
      <div className="content content--technology  pt-[16rem] overflow-hidden pb-0  pr-0">
        <h2 className="heading5 ">
          <span className="opacity-25 mr-8">03</span>
          space launch 101
        </h2>
        <div className="tech__content flex items-center gap-[6rem] h-[42rem] relative">
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
      </div>
    );
  }

export default Technology