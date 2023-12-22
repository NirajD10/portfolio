"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    if (isSmallDevice) {
      setIsMounted(false);
    } else {
      setIsMounted(true);
    }
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
        />
      )}
    </Fragment>
  );
};

export default MouseCursor;
