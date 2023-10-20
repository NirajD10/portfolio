import React, { Fragment } from "react";
import RenderProjectDetails from "@/components/ProjectDetail";
import { notFound } from "next/navigation";
import { getProjectsData } from "@/lib/json-data";

export async function generateStaticParams() {
  const projects = await getProjectsData();

  return projects.map((project) => ({
    id: project.id,
  }));
}

async function getProject(id) {
  const data = await getProjectsData();
  const projectdetail = data.find((pd) => pd.id === id);
  if (projectdetail === undefined) {
    notFound();
  }
  return projectdetail;
}

export default async function ProjectDetails({ params }) {
  const project = await getProject(params.id);

  return (
    <Fragment>
      <RenderProjectDetails project={project} />
    </Fragment>
  );
}
