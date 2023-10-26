import SkillSection from "@/components/SkillSection";
import { getSkillsData } from "@/lib/json-data";
import React, { Fragment } from "react";

const Skills = async () => {
  const list = await getSkillsData();
  return (
    <Fragment>
      <SkillSection skillslist={list} />
    </Fragment>
  );
};

export default Skills;
