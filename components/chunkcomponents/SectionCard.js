import React from "react";

const SectionCard = (props) => {
  return (
    <div className="w-auto mt-20 sm:mt-32 flex flex-col gap-4 sm:gap-8 p-6 lg:p-0 relative">
        {props.children}
    </div>
  );
};

export default SectionCard;
