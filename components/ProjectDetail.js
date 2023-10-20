"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import ProjectsHeadingTitle from "@/components/chunkcomponents/ProjectsHeadingTitle";
import TechnologyBadges from "@/components/chunkcomponents/TechnologyBadges";
import Link from "next/link";

const RenderProjectDetails = ({ project }) => {
  return (
    <Fragment>
      <div className="sm:w-[1440px] min-w-[350px] container">
        <motion.h1
          className="font-dm_sans text-3xl lg:text-6xl text-dark-purple text-center mt-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.7, type: "keyframes" }}
        >
          {project.projectname}
        </motion.h1>
        <CarouselSlider imagedetail={project.imagecarousel} />
        <div className="flex flex-col-reverse lg:flex-row lg:items-start py-2 px-5 lg:px-0">
          <div className="lg:w-3/4 flex flex-col gap-3 pr-3">
            <motion.div
              className="mb-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "keyframes" }}
            >
              <ProjectsHeadingTitle>Overview</ProjectsHeadingTitle>
              <p className="font-roboto font-light text-base sm:text-lg text-primary leading-7">
                {project.Overview}
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "keyframes" }}
            >
              <ProjectsHeadingTitle>Key Feature</ProjectsHeadingTitle>
              <ul className="list-disc list-inside font-roboto font-light text-base sm:text-lg text-primary leading-7">
                {project.keyFeatures.map((keyfeature) => (
                  <li key={keyfeature}>{keyfeature}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "keyframes" }}
            >
              <ProjectsHeadingTitle>Design</ProjectsHeadingTitle>
              {project.designimageurl && (
                <div>
                  <Image
                    width={1280}
                    height={720}
                    src={project.designimageurl}
                    className="w-full p-2"
                    alt=""
                  />
                </div>
              )}
              <p className="font-roboto font-light text-base sm:text-lg text-primary leading-7 mt-4" dangerouslySetInnerHTML={{ __html: project.design }}>
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "keyframes" }}
            >
              <ProjectsHeadingTitle>Development</ProjectsHeadingTitle>
              <p className="font-roboto font-light text-base sm:text-lg text-primary leading-7 mt-4 mb-20 lg:mb-0">
                {project.development}
              </p>
            </motion.div>
          </div>

          <div className="w-fit mx-auto my-4 lg:my-0 lg:w-3/12 min-w-[20%] flex flex-col items-start">
            <motion.div
              className=" w-full rounded-2xl bg-dark-alternative border-neutral-700 border-[1px] py-2 px-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "keyframes" }}
            >
              <h3 className="w-fit font-dm_sans font-normal py-2 my-4 uppercase text-lg text-primary border-b-2 border-dark-purple">
                Technologies
              </h3>
              {/* Technology Badges */}
              <div className="flex felx-row gap-3 flex-wrap">
                {project.technologies.map((tech) => (
                  <TechnologyBadges
                    key={tech.name}
                    title={tech.name}
                    imageurl={tech.icon}
                    technology={tech.name}
                  />
                ))}
              </div>
              <h3 className="w-fit font-dm_sans font-normal py-2 my-4 uppercase text-lg text-primary border-b-2 border-dark-purple">
                Link
              </h3>
              <div className="flex felx-row gap-3 mb-6">
                {/* Github Button */}
                <Link
                  href={project.githuburl}
                  target="_blank"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Repo
                </Link>
                {/* Live Site Button */}
                <Link
                  href={project.livesiteurl}
                  target="_blank"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6Zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1Zm-5 9h4v-7h-4v7Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Live site
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="hidden lg:block h-[1px] bg-[#F9FAFC] opacity-40 mb-20" />
      </div>
    </Fragment>
  );
};

export default RenderProjectDetails;
