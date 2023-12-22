"use client";
import React, { Fragment, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Fragment>
      {isMounted && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#7149C6",
          }}
          outerStyle={{
            border: "3px solid #7149C6",
          }}
          className="hidden sm:block"
        />
      )}
    </Fragment>
  );
};

export default MouseCursor;
