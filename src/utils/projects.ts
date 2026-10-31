import { getCollection } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const projectNumber = (order: number) => String(order).padStart(2, '0');
