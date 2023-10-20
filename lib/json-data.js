import path from "path";
import fs from "fs";

const getExperienceData = async () => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const experienceFileData = await fs.readFileSync(
    jsonDirectory + "/experience.json",
    {
      encoding: "utf-8",
      flag: "r",
    }
  );
  const experiencedata = JSON.parse(experienceFileData);
  return experiencedata;
};

const getSkillsData = async () => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const skillsFileData = await fs.readFileSync(jsonDirectory + "/skills.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const skillsdata = JSON.parse(skillsFileData);
  return skillsdata;
};

const getProjectsData = async () => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const projectFileData = await fs.readFileSync(
    jsonDirectory + "/projects.json",
    {
      encoding: "utf-8",
      flag: "r",
    }
  );
  const projectsdata = JSON.parse(projectFileData);
  return projectsdata;
};

export { getExperienceData, getSkillsData, getProjectsData };
