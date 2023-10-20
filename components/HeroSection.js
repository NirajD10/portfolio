"use client";

import React from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useSectionActiveLink } from "@/hooks/useSectionActiveLink";

const HeroSection = () => {
  const { ref } = useSectionActiveLink("Home");
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  let x = useTransform(scrollYProgress, [0, 1], [0, -8000]);
  let opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section id="home" className="scroll-mt-36" ref={ref}>
      <div className="my-12 sm:my-20 py-5">
        <motion.div
          style={{ y, x, opacity: opacity }}
          className="-left-[2%] -top-[15%] sm:-top-[30%] fixed text-center text-primary text-opacity-5 whitespace-nowrap text-[80vh] sm:text-[115vh] font-bold font-dm_sans uppercase leading-snug -z-[999]"
        >
          <span>Niraj</span>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center py-32 my-32"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.7, type: "keyframes" }}
        >
          <p className="font-roboto font-bold text-[1rem]">Hello, I&apos;m</p>
          <h1 className="font-dm_sans font-black text-[44px] sm:text-[86px] text-primary z-50">
            Niraj Deshmukh
          </h1>
          <p className="font-roboto text-base w-[90%] text-center sm:w-full sm:text-xl font-light my-4 ">
            Passionate Indian Full Stack Developer. Enthusiastic about coding,{" "}
            <br className="hidden sm:block"/> always learning and staying updated with the latest
            technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
