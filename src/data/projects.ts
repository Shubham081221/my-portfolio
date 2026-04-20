// src/data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "KCT Leave Management System",
    description:
      "Full-stack leave management app with JWT auth, role-based access, drag-and-drop uploads, and a real-time dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourhandle/kct-lms",
    live: "https://kct-lms.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "React + TypeScript weather app with live forecasts, location search, and a clean responsive UI. Deployed on Netlify.",
    tags: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/Shubham081221/Weather-Application",
    live: "https://weatherapplication08.netlify.app/",
  },
  {
    id: 3,
    title: "GoSetle Invoicing",
    description:
      "SaaS invoicing platform enabling small businesses to generate quotes, track payments, and manage clients.",
    tags: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yourhandle/go-setle-invoicing",
    live: "https://go-setle-invoicing.netlify.app",
  },
];