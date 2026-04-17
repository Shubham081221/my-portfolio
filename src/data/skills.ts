// src/data/skills.ts
export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Vite", "Vercel", "Netlify", "Postman"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Dart"],
  },
  // ✅ add a new category object anytime
];