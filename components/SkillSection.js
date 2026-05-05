"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionCard from "./chunkcomponents/SectionCard";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import {
  SiAdobephotoshop,
  SiAmazonec2,
  SiAmazonwebservices,
  SiAmazons3,
  SiClaude,
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiEjs,
  SiExpress,
  SiFastify,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const iconMap = {
  aws: SiAmazonwebservices,
  claude: SiClaude,
  css: SiCss3,
  docker: SiDocker,
  drizzle: SiDrizzle,
  ec2: SiAmazonec2,
  ejs: SiEjs,
  express: SiExpress,
  fastify: SiFastify,
  figma: SiFigma,
  firebase: SiFirebase,
  framer: SiFramer,
  git: SiGit,
  html: SiHtml5,
  javascript: SiJavascript,
  jenkins: SiJenkins,
  langchain: SiLangchain,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  mysql: SiMysql,
  next: SiNextdotjs,
  node: SiNodedotjs,
  ollama: SiOllama,
  openai: SiOpenai,
  photoshop: SiAdobephotoshop,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: SiReact,
  s3: SiAmazons3,
  sequelize: SiSequelize,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
};

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
        I&apos;m skilled across frontend, backend, databases, deployment, and AI
        tools, with a stack that supports modern full-stack products.
      </motion.p>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillslist.map((skill) => (
            <div
              key={skill.name}
              className="min-w-0 rounded-2xl border border-neutral-700 bg-dark-alternative p-4 sm:p-5"
            >
              <HeadingTitle
                title={skill.name}
                size="small"
                datalength={skill.skills.length}
                scrollHandler={scrollHandler}
              />
              <div
                id={skill.name}
                className="carousel mt-4 grid auto-cols-[8.75rem] grid-flow-col gap-3 overflow-x-auto scroll-smooth pb-2 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:overflow-visible xl:grid-cols-3"
              >
                {skill.skills.map((s) => {
                  const Icon = iconMap[s.icon] ?? SiOpenai;

                  return (
                    <motion.div
                      key={s.id}
                      className="flex h-32 min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-dark-primary px-4 py-5 transition-all hover:border-purple-primary hover:shadow-md hover:shadow-purple-700/60 sm:h-36"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0, transitionDelay: 0.5 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "keyframes",
                        delay: 0.45,
                        staggerChildren: 0.3,
                      }}
                    >
                      <Icon
                        className="h-11 w-11 text-primary sm:h-12 sm:w-12"
                        aria-hidden="true"
                      />
                      <p className="font-dm_sans text-center text-sm font-medium leading-tight text-primary sm:text-base">
                        {s.name}
                      </p>
                    </motion.div>
                  );
                })}
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
