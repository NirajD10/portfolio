"use client";
import React, { Fragment, useRef, useState } from "react";

const BackgroundSound = () => {
  const [isplaymusic, setIsplayMusic] = useState(false);
  const musicRef = useRef(null);

  const audioHandler = () => {
    if (musicRef.current?.paused) {
      setIsplayMusic(true);
      musicRef.current?.play();
    } else {
      setIsplayMusic(false);
      musicRef.current?.pause();
    }
  };

  return (
    <Fragment>
      <audio ref={musicRef} loop>
        <source src="portfolio_sound.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-[40px] fixed bottom-0 right-3 left-auto z-[99]">
        <div className="flex flex-col items-center realtive after:block after:w-[1px] after:h-[90px] after:mx-0 after:my-auto after:bg-[#F9FAFC]">
          <p
            onClick={audioHandler}
            className=" text-primary p-2 my-3 [writing-mode:vertical-rl] uppercase text-sm cursor-pointer select-none"
          >
            {" "}
            Sound {isplaymusic ? "Off" : "On"}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default BackgroundSound;
