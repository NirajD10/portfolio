"use client";

import React from "react";
import { motion } from "framer-motion";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import SectionCard from "./chunkcomponents/SectionCard";
import { useSectionActiveLink } from "@/hooks/useSectionActiveLink";

const AboutSection = () => {
  const { ref } = useSectionActiveLink("About");

  return (
    <SectionCard>
      <HeadingTitle title="About me" size="big" />
      <motion.div
        ref={ref}
        id="about"
        className="bg-dark-alternative text-primary py-5 px-4 sm:py-10 sm:px-8 border-2 border-neutral-800 rounded-[20px] hover:backdrop-blur-lg hover:backdrop-brightness-75 scroll-mt-28 z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "keyframes" }}
      >
        <p className="font-roboto font-light text-base sm:text-xl">
          Born with hearing impairment. Passionate{" "}
          <span className="text-[#7a52cf]">Full Stack Developer</span> with
          expertise in JavaScript, ReactJS, NodeJS/ExpressJS. Experienced in
          developing web applications with a strong focus on user experience.
          Skilled in both front-end and back-end technologies, with a proven
          track record of successfully delivering projects.
        </p>
        <p className="font-roboto font-light text-base sm:text-xl mt-4">
          Proactive learner who stays updated with the latest advancements in
          web development. I have a bachelor’s degree in Computer science (B.sc.
          Computer sci.) having graduated from Sir Parashurambhau College (S.p.
          College), Pune in 2020.
        </p>
      </motion.div>
    </SectionCard>
  );
};

export default AboutSection;
