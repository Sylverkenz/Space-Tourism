import React, { useState } from "react";
import { Slide1, Slide2, Tabs } from "./Components";
import { useGlobaContext } from "./context";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function SharedLayout() {
  return (
    <main className="relative bg-primary h-screen py-12">
      <Header />
      <Outlet />
    </main>
  );
}

function Home() {
  return (
    <div className="content content--home lg:flex items-end gap-[30rem] text-center lg:text-start pt-[14rem] md:pt-[18rem] lg:py-[10vh] px-[8vw] md:pr-[8vw]">
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
    </div>
  );
}

function Destinations() {
  const { places, setPlaces } = useGlobaContext();

  return (
    <div className="content content--destination  pt-[8rem] md:pt-[14rem] lg:pt-[16rem] overflow-hidden px-8 md:pr-[8vw]">
      <h2 className="heading5 mb-[rem]">
        <span className="opacity-25 mr-8">01</span>
        pick your destination
      </h2>

      <article className="destination__content py-4 flex flex-col gap-6 md:gap-[3rem] lg:flex-row justify-between">
        {places.map((place) => {
          const { id, img, title, desc, distance, travelTime } = place;
          return (
            <figure key={id} className="destination__imgbox lg:w-[60%]">
              <img
                src={img}
                alt=""
                className="w-[17rem] md:w-[30rem] lg:w-[39rem] h-[100%] mx-auto"
              />
            </figure>
          );
        })}

        <article className="lg:absolute top-[30%] right-[25rem] mx-auto lg:mx-0">
          <Tabs />
        </article>

        {places.map((place) => {
          const { id, img, title, desc, distance, travelTime } = place;
          return (
            <div
              key={id}
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
          );
        })}
      </article>
    </div>
  );
}

function Crew() {
  const { guides, setGuides } = useGlobaContext();

  return (
    <div className="content content--crew  pt-[16rem] overflow-hidden pb-0 pr-[8vw]">
      <h2 className="heading5 ">
        <span className="opacity-25 mr-8">02</span>
        meet your crew
      </h2>
      <Slide1 />
      {guides.map((guide) => {
        const { id, image, position, desc, name } = guide;
        return (
          <article key={id} className="crew__content flex  items-center">
            <div className="crew__info w-[60%]">
              <h3 className="heading4 opacity-50">{position}</h3>
              <h4 className="heading3">{name}</h4>
              <p className="bodytext w-[60%]">{desc}</p>
            </div>
            <div className="crew__img h-[51rem] -mt-[5rem]">
              <img src={image} alt="" className="w-[100%] h-[100%]" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

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

export { SharedLayout, Home, Destinations, Crew, Technology };
