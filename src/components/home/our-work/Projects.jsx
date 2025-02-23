import React from "react";
import { motion } from "framer-motion";
import projects from "../../../utils/projects";
import { useState } from "react";

const Projects = ({ limit }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageToShow = projects.slice(0, limit);
  return (
    <div className="font-bold cards p-[3rem]  lg:p-[4rem] grid gap-x-3  md:grid-cols-2 md:gap-x-[1rem] gap-y-[1rem] justify-items-center items-center grid-cols-1">
      {imageToShow.map((item, idx) => (
        <div
          key={idx}
          className="font-bold card-container overflow-hidden w-[84vw] h-[69vw] md:w-[44vw] md:h-[37vw] rounded-xl "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h1 className="absolute overflow-hidden text-[2.3rem] sm:text-[3rem] md:text-[5rem] font-bold uppercase whitespace-nowrap z-10 left-1/2 transform flex -translate-x-1/2 translate-y-[160%]  md:translate-y-[110%]   text-[#CDEA68] ">
            {item.name.split("").map((char, charIdx) => (
              <motion.span
                initial={{ y: 200 }}
                animate={hoveredIndex === idx ? { y: 0 } : { y: 200 }}
                transition={{
                  ease: [0.85, 0, 0.15, 1],
                  delay: charIdx * 0.02,
                }}
                key={charIdx}
                className="block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scale: 1 }}
            animate={hoveredIndex === idx ? { scale: 0.9 } : {}}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.3 }}
            className="relative card w-full h-full rounded-xl"
          >
            <motion.img className="rounded-xl" src={item.img} alt={item.name} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
