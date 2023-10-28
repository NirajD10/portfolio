"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import SectionCard from "./chunkcomponents/SectionCard";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import Image from "next/image";

const ExperienceSection = ({ tabsanddetails }) => {
  const [selectedTab, setSelectedTab] = useState(tabsanddetails[0]);

  return (
    <SectionCard>
      <HeadingTitle title="Experience" size="big" />
      <motion.p
        className="font-roboto text-base sm:text-xl text-primary font-normal"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "keyframes" }}
      >
        You can also view my{" "}
        <a
          href="/Niraj's Resume.pdf"
          alt="Niraj's Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline px-1 text-[#7149C6] hover:bg-[#7149C6] hover:text-primary transition-all"
        >
          resume
        </a>
      </motion.p>

      <div className="lg:h-[28rem]">
        {/* Experience Tabs */}
        <div className="flex flex-col  lg:flex-row justify-center">
          <motion.div
            className="border-2 border-neutral-700 rounded-[20px] h-fit sm:w-fit"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.72, type: "keyframes" }}
          >
            <ul className="flex flex-row lg:flex-col gap-1">
              {tabsanddetails.map((tad) => (
                <li
                  key={tad.workrole}
                  className="text-primary py-3 px-5 sm:py-5 sm:px-6 rounded-xl sm:rounded-[20px] cursor-pointer relative"
                  onClick={() => setSelectedTab(tad)}
                >
                  {tad === selectedTab && (
                    <motion.span
                      className="absolute bg-dark-secondary inset-0 rounded-[14px] sm:rounded-[18px] -z-10"
                      layoutId="selectedTab"
                      transition={{
                        type: "spring",
                        stiffness: 310,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                  <p className="font-roboto font-bold text-base sm:text-lg">
                    {tad.companyname}
                  </p>
                  <p className="font-roboto font-light text-base sm:text-lg">
                    {tad.workrole}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* */}
          {/* Experience Details */}
          <div className="lg:w-[38em] bg-dark-alternative border-2 border-neutral-700 rounded-[20px] py-8 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.companyname}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "keyframes" }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start px-6">
                  <div className="flex flex-col items-center sm:flex-row gap-3">
                    <Image
                      src={selectedTab.companyimageurl}
                      width={60}
                      height={60}
                      alt={selectedTab.companyname}
                    />
                    <div className="flex flex-col items-center sm:items-start text-primary">
                      <p className="font-roboto font-bold text-base sm:text-[20px] m-0 p-0">
                        {selectedTab.workrole}
                      </p>
                      <p className="font-roboto font-light text-base m-0 p-0">
                        {selectedTab.dates}
                      </p>
                      <p className="sm:hidden font-roboto text-base border-t-[1px] border-white mt-2 text-[#865be4]">
                        {selectedTab.companyname}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-row py-2">
                    <div className="mx-3 w-1 h-5 bg-white"></div>
                    <p className="font-roboto text-base text-[#865be4]">
                      {selectedTab.companyname}
                    </p>
                  </div>
                </div>

                <div className="my-4">
                  <ul className="pl-4 sm:pl-20 space-y-2 text-primary list-disc list-outside marker:text-[#7149C6] marker:text-xl">
                    {selectedTab.accomplish.map((accomplish) => (
                      <li
                        key={accomplish}
                        className="font-roboto font-light ml-2 pl-3"
                      >
                        {accomplish}
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
