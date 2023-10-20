import SkillSection from "@/components/SkillSection";
import React, { Fragment } from "react";

const getSkillsDatafromAPI = async () => {
  const response = await fetch('/api/skills');
  return await response.json();
};

const Skills = async () => {
  if(!process.env.SKILLS_API_KEY){
    return null;
  }
  const list = await getSkillsDatafromAPI();
  return (
    <Fragment>
      <SkillSection skillslist={list} />
    </Fragment>
  );
};

export default Skills;
