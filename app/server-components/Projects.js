import ProjectsSection from "@/components/ProjectsSection";
import { getProjectsData } from "@/lib/json-data";
import React, { Fragment } from "react";

const Projects = async () => {
  const projectsdetails = await getProjectsData();
  return (
    <Fragment>
      <ProjectsSection projectsdetails={projectsdetails} />
    </Fragment>
  );
};

export default Projects;
