import React, { useEffect } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

const splitter = new GraphemeSplitter();

function LoadingScreen({ finishLoading }) {
  useEffect(() => {
    async function getLoader() {
      const { helix } = await import("ldrs");
      helix.register();
    }
    getLoader();
  }, []);
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center bg-dark-primary">
      <div className="my-16">
        <l-helix size="150" speed="2.0" color="#7149C6"></l-helix>
      </div>
      <div className="h-[6rem]">
        <TypeAnimation
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Hello.",
            1000,
            "नमस्ते",
            1000,
            "Hola.",
            1000,
            "Bonjour",
            1000,
            "你好",
            1000,          
            () => finishLoading(),
          ]}
          style={{ fontSize: "2em", color: "#F9FAFC" }}
          repeat={0}
          cursor={false}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
