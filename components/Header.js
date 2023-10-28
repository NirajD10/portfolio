"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { ActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";

const Header = () => {
  const { activeSection, setActiveSection, setTimeofLastClick } =
    useContext(ActiveSectionContext);

  const pathname = usePathname();
  const displayNav = pathname === "/" ? true : false;

  return (
    <header className="container flex flex-row relative justify-between items-center px-4 py-2 lg:p-2 mt-4 z-[999]">
      <Link href="/">
        <motion.p
          className="font-dm_sans text-base sm:text-[25px] uppercase font-bold"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "keyframes",
          }}
        >
          Niraj Deshmukh
        </motion.p>
      </Link>

      {displayNav && (
        <>
          <motion.div
            className="hidden sm:block fixed top-3 left-1/2 h-[3.5rem] w-[24rem] rounded-full border border-neutral-800 border-opacity-80 bg-dark-alternative bg-opacity-50 shadow-lg shadow-[#7149c6]/[0.08] backdrop-blur-[0.6rem]"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>
          <nav className="hidden sm:block fixed top-[0.5rem] left-1/2 h-8 -translate-x-1/2 py-2">
            <ul className="flex w-[25rem] flex-wrap items-center justify-center gap-y-[0.5px] gap-[18px] text-[1rem] font-roboto text-primary">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className="flex w-full items-center justify-center px-4 py-3 translate-x-0.5 hover:text-white transition"
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeofLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-dark-secondary rounded-full absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 310,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </>
      )}

      <motion.div
        className="flex flex-row gap-2 sm:gap-4 items-center"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "keyframes",
        }}
      >
        <a
          href="https://github.com/NirajD10"
          alt="Niraj github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width={24}
            height={24}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-125"
          >
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/niraj-deshmukh-340aa0167"
          alt="Niraj Linkedin profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width={24}
            height={24}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-125"
          >
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715h-.001ZM7.003 8.575a1.546 1.546 0 0 1-1.287-2.409 1.548 1.548 0 1 1 1.286 2.409h.001Zm1.336 9.764H5.666V9.75H8.34v8.589h-.001ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.004Z" />
          </svg>
        </a>
        <a
          href="/Niraj's Resume.pdf"
          alt="Niraj's Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 sm:px-2 py-1 h-fit no-underline font-roboto font-light bg-transparent border-[1px] border-[#7149c6] text-[#ad86ff] hover:bg-[#7149c6] hover:text-primary rounded-md"
        >
          Resume
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
