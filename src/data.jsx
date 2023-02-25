import d1 from "./assets/destination/image-moon.webp";
import d2 from "./assets/destination/image-mars.webp";
import d3 from "./assets/destination/image-europa.webp";
import d4 from "./assets/destination/image-titan.webp";
import c1 from "./assets/crew/image-douglas-hurley.webp";
import c2 from "./assets/crew/image-mark-shuttleworth.webp";
import c3 from "./assets/crew/image-victor-glover.webp";
import c4 from "./assets/crew/image-anousheh-ansari.webp";
import t2 from "./assets/technology/image-launch-vehicle-portrait.jpg";
import t3 from "./assets/technology/image-spaceport-portrait.jpg";
import t4 from "./assets/technology/image-space-capsule-portrait.jpg";
import t21 from "./assets/technology/image-launch-vehicle-landscape.jpg";
import t31 from "./assets/technology/image-spaceport-landscape.jpg";
import t41 from "./assets/technology/image-space-capsule-landscape.jpg";
export const destination = [
  {
    id: 0,
    title: "moon",
    img: d1,
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },

  {
    id: 1,
    title: "mars",
    img: d2,
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    travelTime: "9 months",
  },

  {
    id: 2,
    title: "europa",
    img: d3,
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    travelTime: "3 years",
  },

  {
    id: 3,
    title: "titan",
    img: d4,
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travelTime: "7 years",
  },
];

export const tabs = [
  { id: 0, name: "moon" },
  { id: 1, name: "mars" },
  { id: 2, name: "europa" },
  { id: 3, name: "titan" },
];

export const slide2 = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const crew = [
  {
    id: 0,
    position: "commander",
    name: "douglas hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: c1,
  },
  {
    id: 1,
    position: "mission specialist",
    name: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: c2,
  },
  {
    id: 2,
    position: "pilot",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: c3,
  },
  {
    id: 3,
    position: "flight engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: c4,
  },
];

export const techs = [
  {
    id: 0,
    name: "launch vehicle",
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: t2,
  },
  {
    id: 1,
    name: "spaceport",
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: t3,
  },

  {
    id: 2,
    name: "space capsule",
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image: t4,
  },
];

export const techs2 = [
  {
    id: 0,
    name: "launch vehicle",
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: t21,
  },
  {
    id: 1,
    name: "spaceport",
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: t31,
  },

  {
    id: 2,
    name: "space capsule",
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image: t41,
  },
];
