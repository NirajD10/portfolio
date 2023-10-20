import ProjectsSection from "@/components/ProjectsSection";
import { getProjectsData } from "@/lib/json-data";
import React, { Fragment } from "react";

// const getProjectsDatafromAPI = async () => {
//   const response = await fetch(process.env.PROJECTS_API_KEY, {
//     next: {
//       revalidate: 60,
//     },
//   });
//   const jsondata = await response.json();
//   return jsondata;
// };

const Projects = async () => {
  const projectsdetails = await getProjectsData();
  return (
    <Fragment>
      <ProjectsSection projectsdetails={projectsdetails} />
    </Fragment>
  );
};

export default Projects;
