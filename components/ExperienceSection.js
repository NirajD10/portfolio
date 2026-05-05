"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionCard from "./chunkcomponents/SectionCard";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import Image from "next/image";

const ExperienceSection = ({ tabsanddetails }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const selectedTab = tabsanddetails[selectedTabIndex] ?? tabsanddetails[0];

  return (
    <SectionCard>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <HeadingTitle title="Experience" size="big" />
        <motion.a
          href="/Niraj's Resume.pdf"
          alt="Niraj's Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full border border-purple-primary px-5 py-2 font-roboto text-sm font-bold text-primary transition-all hover:bg-dark-secondary sm:text-base"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "keyframes" }}
        >
          View Resume
        </motion.a>
      </div>

      <div className="w-full">
        {/* Experience Tabs */}
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(16rem,20rem)_minmax(0,42rem)] lg:items-stretch lg:justify-center lg:gap-6">
          <motion.div
            className="h-fit overflow-hidden rounded-2xl border border-neutral-700 bg-dark-alternative/80 p-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.72, type: "keyframes" }}
          >
            <ul className="carousel flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {tabsanddetails.map((tad, index) => {
                const isSelected = index === selectedTabIndex;

                return (
                <li
                  key={tad.workrole}
                  onClick={(event) => {
                    setSelectedTabIndex(index);
                    if (index < tabsanddetails.length - 1) {
                      event.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }
                  }}
                  className="relative min-w-[14.5rem] snap-start rounded-xl px-4 py-4 text-primary transition-colors hover:bg-dark-primary lg:min-w-0 lg:px-5"
                >
                  {isSelected && (
                    <motion.span
                      className="absolute inset-0 rounded-xl border border-purple-primary bg-dark-secondary"
                      layoutId="selectedTab"
                      transition={{
                        type: "spring",
                        stiffness: 310,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                  <button
                    type="button"
                    className="relative z-10 flex w-full flex-col items-start text-left"
                  >
                    <span className="font-roboto text-sm font-bold leading-snug sm:text-base">
                      {tad.companyname}
                    </span>
                    <span className="mt-1 font-roboto text-sm font-light leading-snug text-primary/80 sm:text-base">
                      {tad.workrole}
                    </span>
                    <span className="mt-3 h-[2px] w-10 rounded-full bg-primary/70"></span>
                  </button>
                </li>
                );
              })}
            </ul>
          </motion.div>
          {/* */}
          {/* Experience Details */}
          <div className="min-h-[30rem] overflow-hidden rounded-2xl border border-neutral-700 bg-dark-alternative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.companyname}
                className="flex h-full flex-col"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, type: "keyframes" }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="border-b border-neutral-700 bg-dark-primary px-5 py-6 sm:px-8 sm:py-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-neutral-700 bg-dark-alternative p-2 sm:h-20 sm:w-20">
                        <Image
                          src={selectedTab.companyimageurl}
                          fill
                          sizes="80px"
                          className="object-contain p-2"
                          alt={selectedTab.companyname}
                        />
                      </div>
                      <div className="flex min-w-0 flex-col text-primary">
                        <p className="font-roboto text-xl font-bold leading-tight sm:text-[26px]">
                          {selectedTab.workrole}
                        </p>
                        <p className="mt-2 font-roboto text-base font-bold text-dark-purple">
                          {selectedTab.companyname}
                        </p>
                      </div>
                    </div>
                    <p className="w-fit rounded-full border border-neutral-700 px-4 py-2 font-roboto text-sm font-light text-primary sm:text-base">
                      {selectedTab.dates}
                    </p>
                  </div>
                </div>

                <div className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
                  <ul className="space-y-4 text-primary">
                    {selectedTab.accomplish.map((accomplish) => (
                      <li
                        key={accomplish}
                        className="grid grid-cols-[0.75rem_1fr] gap-4 font-roboto text-base font-light leading-7 sm:text-lg"
                      >
                        <span className="mt-3 h-2 w-2 rounded-full bg-dark-secondary"></span>
                        <span>{accomplish}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* */}
        </div>
      </div>
      {/* <div className="blob"></div> */}
      <div className="absolute -bottom-8 -right-24 w-[550px] h-[550px] bg-dark-purple rounded-full blur-[220px] opacity-60 -z-10"></div>
    </SectionCard>
  );
};

export default ExperienceSection;
