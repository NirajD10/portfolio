"use client";
import React, { createContext, useState } from "react";

export const ActiveSectionContext = createContext(null);

function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeofLastClick, setTimeofLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, timeofLastClick, setActiveSection, setTimeofLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;
