import React from "react";

const Badges = (props) => {
  return (
    <div className="h-fit py-2 px-3 sm:px-4 sm:mx-1 bg-dark-secondary text-primary font-roboto text-base lg:text-lg rounded-3xl">
      {props.children}
    </div>
  );
};

export default Badges;
