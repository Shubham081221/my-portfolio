// src/data/experience.ts
export type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance";
  description: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "DIGIHELP IT SERVICES LLP",
    location: "Remote",
    duration: "Jan 2024 – Apr 2024",
    type: "Internship",
    description: [
      "Built and maintained React components for the company's internal dashboard.",
      "Improved page load performance by 30% through code splitting and lazy loading.",
      "Collaborated with the design team to implement responsive UI using Tailwind CSS.",
    ],
  },
  // ✅ add more experience objects here
];