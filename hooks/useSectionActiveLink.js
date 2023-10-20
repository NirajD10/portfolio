import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionActiveLink(sectionName) {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection, timeofLastClick } =
    useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeofLastClick, sectionName]);

  return { ref };
}
