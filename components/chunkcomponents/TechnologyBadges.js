import React from "react";
import Image from "next/image";

const TechnologyBadges = (props) => {
  return (
    <div className="flex flex-row items-center">
      <Image
        width={45}
        height={45}
        src={props.imageurl}
        className="w-[45px] h-[45px] rounded-full inline-flex z-10 bg-white p-1 border-b-1 border-slate-800 object-scale-down"
        alt={props.title}
      />
      <span className="-translate-x-4 h-[2.2rem] bg-[#7149C6] px-4 py-2 rounded-lg z-1 text-primary font-roboto font-bold text-base sm:text-lg sm:border-[1px] border-white">
        <p className="-translate-y-0.5 sm:-translate-y-1.5 translate-x-1.5">
          {props.technology}
        </p>
      </span>
    </div>
  );
};

export default TechnologyBadges;
