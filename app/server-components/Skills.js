import SkillSection from "@/components/SkillSection";
import { getSkillsData } from "@/lib/json-data";
import React, { Fragment } from "react";

// const getSkillsDatafromAPI = async () => {
//   const response = await fetch(process.env.SKILLS_API_KEY);
//   return await response.json();
// };

const Skills = async () => {
  const list = await getSkillsData();
  return (
    <Fragment>
      <SkillSection skillslist={list} />
    </Fragment>
  );
};

export default Skills;
