// composables/useProjects.ts
import { projects, getProjectBySlug } from "~/data/projects";

export type { Project, ProjectImage } from "~/data/projects";

export const useProjects = () => {
  const getFeaturedProjects = () =>
    projects.filter((project) => project.featured);

  const getAllProjects = () => projects;

  // The project after this one, wrapping around to the first
  const getNextProject = (slug: string) => {
    const index = projects.findIndex((project) => project.slug === slug);
    return projects[(index + 1) % projects.length];
  };

  return {
    projects,
    getFeaturedProjects,
    getAllProjects,
    getProjectBySlug,
    getNextProject,
  };
};
