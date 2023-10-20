import ExperienceSection from "@/components/ExperienceSection";
import React, { Fragment } from "react";

const getExperienceDatafromAPI = async () => {
  const response = await fetch(process.env.EXPERIENCE_API_KEY);
  const jsondata = await response.json();
  return jsondata;
};

const Experience = async () => {
  if(!process.env.EXPERIENCE_API_KEY){
    return null;
  }
  const tabsanddetails = await getExperienceDatafromAPI();
  return (
    <Fragment>
      <ExperienceSection tabsanddetails={tabsanddetails} />
    </Fragment>
  );
};

export default Experience;
