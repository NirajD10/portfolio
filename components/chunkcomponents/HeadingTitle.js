import React  from "react";
import { motion} from "framer-motion";
import { clsx } from "clsx";

const HeadingTitle = (props) => {
  return (
    <div className="flex flex-row justify-between sm:block">
      <motion.h2
        className={clsx(
          { "text-[1rem]": props.size === "small" },
          { "text-[1.5rem] sm:text-[2rem]": props.size === "big" },
          {
            "inline-block font-dm_sanstext-primary py-2 border-b-2 border-b-purple-primary": true,
          }
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transitionDelay: 0.5}}
        viewport={{ once: true }}
        transition={{
          type: "keyframes",
          delay: 0.45,
        }}
      >
        {props.title}
      </motion.h2>
      <div
        className={`${clsx(
          { "flex flex-row gap-2": props.size === "small" },
          { hidden: props.size === "small" && props.datalength <= 2 },
          { hidden: props.size === "big" }
        )} sm:hidden`}
      >
        <button
          className="rounded-full bg-dark-secondary p-2"
          onClick={() => {
            props.scrollHandler("left", props.title);
          }}
        >
          <svg
            width={30}
            height={30}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />
          </svg>
        </button>
        <button
          className="rounded-full bg-dark-secondary p-2"
          onClick={() => {
            props.scrollHandler("right", props.title);
          }}
        >
          <svg
            width={30}
            height={30}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeadingTitle;
