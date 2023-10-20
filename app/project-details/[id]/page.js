import React, { Fragment } from "react";
import RenderProjectDetails from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  if (process.env.PROJECTS_API_KEY === undefined) {
    return null;
  }
  const res = await fetch(process.env.PROJECTS_API_KEY);
  const projects = await res.json();

  return projects.map((project) => ({
    id: project.id,
  }));
}

async function getProject(id) {
  const res = await fetch(process.env.PROJECTS_API_KEY, {
    next: {
      revalidate: 160,
    },
  });

  const data = await res.json();
  const projectdetail = data.find((pd) => pd.id === id);
  if (projectdetail === undefined) {
    notFound();
  }
  return projectdetail;
}

export default async function ProjectDetails({ params }) {
  if (process.env.PROJECTS_API_KEY === undefined) {
    return null;
  }
  const project = await getProject(params.id);

  return (
    <Fragment>
      <RenderProjectDetails project={project} />
    </Fragment>
  );
}
