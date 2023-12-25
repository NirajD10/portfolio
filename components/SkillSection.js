"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCard from "./chunkcomponents/SectionCard";
import HeadingTitle from "./chunkcomponents/HeadingTitle";

const SkillSection = ({ skillslist }) => {
  const scrollHandler = (sidedirection, id) => {
    var leftslide = document.getElementById(id);
    if (sidedirection === "left") {
      leftslide.scrollLeft = leftslide.scrollLeft - 80;
    } else {
      leftslide.scrollLeft = leftslide.scrollLeft + 80;
    }
  };

  return (
    <SectionCard>
      <HeadingTitle title="My Skills" size="big" />
      <motion.p
        className="font-roboto text-base sm:text-xl text-primary font-normal"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.72, type: "keyframes" }}
      >
        I&apos;m skilled in various frontend and backend technologies,
        demonstrating my ability and adaptability.
      </motion.p>
      <div className="flex flex-col gap-4">
        <div className="flex sm:flex-row flex-col gap-5 sm:flex-wrap">
          {skillslist.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <HeadingTitle
                title={skill.name}
                size="small"
                datalength={skill.skills.length}
                scrollHandler={scrollHandler}
              />
              <div
                id={skill.name}
                className="flex flex-row gap-3 max-w-full whitespace-nowrap sm:w-auto sm:flex-wrap carousel overflow-auto touch-auto scroll-smooth"
              >
                {skill.skills.map((s) => (
                  <motion.div
                    key={s.id}
                    className="flex flex-col gap-3 min-w-max w-40 h-40 my-5 justify-center items-center bg-dark-alternative border-neutral-800 hover:shadow-md hover:shadow-purple-700/60 hover:border-purple-primary border-2 rounded-2xl py-6 px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transitionDelay: 0.5 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "keyframes",
                      delay: 0.90,
                      staggerChildren: 0.3,
                    }}
                  >
                    <Image
                      src={s.iconUrl}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-[75px] h-[75px] object-contain"
                      alt={s.name}
                    />
                    <p className="font-dm_sans font-medium text-base sm:text-[20px] text-primary text-center leading-none">
                      {s.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div></div>
        <div></div>
      </div>
      <div className="absolute -bottom-8 -left-28 w-[550px] h-[550px] bg-dark-purple rounded-full blur-[220px] opacity-60 -z-10"></div>
    </SectionCard>
  );
};

export default SkillSection;
