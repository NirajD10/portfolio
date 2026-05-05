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
          className="my-5 flex scroll-mt-28 flex-col gap-8 sm:gap-10 lg:gap-14"
        >
          {projectsdetails.map((project, index) => (
            <motion.article
              key={project.id}
              className="mx-auto grid w-full overflow-hidden rounded-2xl border border-neutral-700 bg-dark-alternative shadow-2xl shadow-dark-primary/60 lg:w-11/12 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-stretch lg:even:grid-cols-[minmax(22rem,0.9fr)_minmax(0,1.1fr)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.2, type: "keyframes" }}
            >
              <Link
                href={`/project-details/${project.id}`}
                className={`group relative block min-h-[14rem] overflow-hidden bg-dark-primary sm:min-h-[20rem] lg:min-h-[24rem] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.thumbnailsurl}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  alt={project.projectname}
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] sm:p-6"
                />
                <span className="absolute left-5 top-5 rounded-full border border-neutral-700 bg-dark-alternative px-3 py-1 font-roboto text-xs font-bold text-primary sm:text-sm">
                  0{index + 1}
                </span>
              </Link>

              <div className="flex min-h-full flex-col gap-5 p-5 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-dm_sans text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[34px]">
                    {project.projectname}
                  </h3>
                  <Link
                    href={`/project-details/${project.id}`}
                    aria-label={`View details for ${project.projectname}`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-primary text-primary transition-all hover:bg-dark-secondary"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.004V6h11v11h-2V9.414Z" />
                    </svg>
                  </Link>
                </div>

                <p className="font-roboto text-base font-light leading-7 text-primary sm:text-lg">
                  {project.shortdescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((ptech) => (
                    <Badges key={ptech.name}>{ptech.name}</Badges>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                  <Link
                    href={`/project-details/${project.id}`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-purple-primary px-4 py-3 font-roboto text-sm font-bold text-primary transition-all hover:bg-dark-secondary"
                  >
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      >
                        <path d="M19 5v14H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z"></path>
                        <path d="M14 17H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z"></path>
                      </svg>
                    <span>Details</span>
                  </Link>
                  <a
                    href={project.githuburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-700 px-4 py-3 font-roboto text-sm font-bold text-primary transition-all hover:border-purple-primary hover:bg-dark-primary"
                  >
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      >
                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                      </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.livesiteurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-700 px-4 py-3 font-roboto text-sm font-bold text-primary transition-all hover:border-purple-primary hover:bg-dark-primary"
                  >
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      >
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9Z" />
                      </svg>
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionCard>
      <div className="mb-20 sm:mb-40"></div>
    </Fragment>
  );
};

export default ProjectsSection;
