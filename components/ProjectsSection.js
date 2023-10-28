"use client";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import SectionCard from "./chunkcomponents/SectionCard";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import Image from "next/image";
import Badges from "./chunkcomponents/Badges";
import { useSectionActiveLink } from "@/hooks/useSectionActiveLink";
import Link from "next/link";

const ProjectsSection = ({ projectsdetails }) => {
  const { ref } = useSectionActiveLink("Projects");

  return (
    <Fragment>
      <SectionCard>
        <HeadingTitle title="Projects" size="big" />
        <div
          ref={ref}
          id="projects"
          className="my-5 flex flex-col gap-10 rounded-lg scroll-mt-28"
        >
          {projectsdetails.map((project) => (
              <motion.div
               key={project.id}
                className="sm:w-5/6 mx-auto flex flex-col lg:odd:flex-row lg:even:flex-row-reverse lg:first-of-type:justify-end lg:odd:justify-end lg:even:justify-start bg-[#41345C] bg-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, type: "keyframes" }}
              >
                <Image
                  src={project.thumbnailsurl}
                  width={530}
                  height={360}
                  alt={project.projectname}
                  className="w-[530px] h-[350px] border-[1px] border-neutral-700 rounded-l-lg hover:scale-105 transition-transform object-scale-down"
                />
                <div className="p-3 lg:p-8  w-full flex flex-col gap-6 ">
                  <div className="flex flex-row">
                    <h3 className="font-dm_sans font-bold text-lg sm:text-2xl lg:text-[32px] text-primary">
                      {project.projectname}
                    </h3>
                    <svg
                      width={28}
                      height={28}
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px]"
                    >
                      <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.004V6h11v11h-2V9.414Z" />
                    </svg>
                  </div>

                  <p className="font-roboto font-light sm:text-base lg:text-lg text-primary flex-wrap">
                    {project.shortdescription}
                  </p>
                  <div className="flex flex-wrap gap-2 gap-y-2  sm:gap-0">
                    {project.technologies.map((ptech) => (
                      <Badges key={ptech.name}>{ptech.name}</Badges>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-row gap-4">
                    <Link href={`project-details/${project.id}`}>
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] hover:scale-125"
                      >
                        <path d="M19 5v14H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z"></path>
                        <path d="M14 17H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z"></path>
                      </svg>
                    </Link>
                    <a href={project.githuburl}>
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] hover:scale-125"
                      >
                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                      </svg>
                    </a>
                    <a href={project.livesiteurl}>
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] hover:scale-125"
                      >
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </SectionCard>
      <div className="mb-20 sm:mb-40"></div>
    </Fragment>
  );
};

export default ProjectsSection;
