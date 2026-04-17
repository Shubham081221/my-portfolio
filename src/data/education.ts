// src/data/education.ts
export type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your College Name",
    location: "Ludhiana, Punjab",
    duration: "2021 – 2025",
    grade: "8.5 CGPA",
    highlights: [
      "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems.",
      "Built KCT Leave Management System as a major project.",
    ],
  },

  {
  id: 2,
  degree: "Higher Secondary (12th)",
  institution: "Your School Name",
  location: "Ludhiana, Punjab",
  duration: "2019 – 2021",
  grade: "92%",
},
  // ✅ add more — e.g. 12th, certifications, etc.
];