import React from "react";
import { motion } from "framer-motion";
import {pageAnim} from '../animations'

function Home() {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit" className="content content--home lg:flex items-end gap-[30rem] text-center lg:text-start pt-[14rem] pb-[5rem] md:pt-[18rem] lg:py-[10vh] px-[8vw] md:pr-[8vw]">
      <article className="lg:w-[50%] max-w-[45rem] mx-auto lg:mx-0">
        <h1 className="heading5">
          so, you want to travel to<span className="heading1 block">space</span>
        </h1>
        <p className="bodytext">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <button className="largebtn heading4 text-transparent">explore</button>
    </motion.div>
  );
}

export default Home;
