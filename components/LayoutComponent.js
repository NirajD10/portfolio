"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header";
import ConnectSection from "@/components/ConnectSection";
import MouseCursor from "@/components/MouseCursor";
import BackgroundSound from "@/components/BackgroundSound";

import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

function LayoutComponent(props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, []);
  return (
    <AnimatePresence initial={false} mode="wait">
      {isLoading && isHome ? (
        <motion.div
          key={"loadingscreen"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, type: "linear" }}
        >
          <LoadingScreen finishLoading={() => setIsLoading(false)} />
        </motion.div>
      ) : (
        <>
          <BackgroundSound />
          <ActiveSectionContextProvider>
            <MouseCursor />
            <main className="bg-dark-primary relative z-10 flex flex-col justify-center items-center text-primary overflow-x-hidden rounded-b-[3.5rem] sm:rounded-b-[4.5rem] border-b-4 border-b-neutral-800">
              <Header />
              {props.children}
            </main>
            <ConnectSection />
          </ActiveSectionContextProvider>
        </>
      )}
    </AnimatePresence>
  );
}

export default LayoutComponent;
