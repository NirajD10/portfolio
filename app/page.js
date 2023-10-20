import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

import Experience from "./server-components/Experience";
import Skills from "./server-components/Skills";
import Projects from "./server-components/Projects";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="w-full h-[100%] bg-gradient-to-b from-[#111111] via-[#7149c6a9] to-[#111111] backdrop-blur-3xl">
        <HeroSection />
      </div>
      <div className="sm:w-[1440px] min-w-[350px] min-h-[85vh] container">
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </Fragment>
  );
}
