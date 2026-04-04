export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Astro', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Figma'],
  },
];
