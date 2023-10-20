import React, { Fragment } from "react";
import RenderProjectDetails from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch('/api/projects');
  const projects = await res.json();

  return projects.map((project) => ({
    id: project.id,
  }));
}

async function getProject(id) {
  const res = await fetch('/api/projects', {
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
  const project = await getProject(params.id);

  return (
    <Fragment>
      <RenderProjectDetails project={project} />
    </Fragment>
  );
}
