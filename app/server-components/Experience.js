import ExperienceSection from "@/components/ExperienceSection";
import { getExperienceData } from "@/lib/json-data";
import React, { Fragment } from "react";

// const getExperienceDatafromAPI = async () => {
//   const response = await fetch('http://localhost:8080/api/experience');
//   const jsondata = await response.json();
//   console.log(jsondata)
//   return jsondata;
// };

const Experience = async () => {
  const tabsanddetails = await getExperienceData();
  return (
    <Fragment>
      <ExperienceSection tabsanddetails={tabsanddetails} />
    </Fragment>
  );
};

export default Experience;
