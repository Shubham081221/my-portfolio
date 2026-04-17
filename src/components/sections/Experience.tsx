// src/components/sections/Experience.tsx
import { experience } from "@/data/experience";

const typeColors: Record<string, string> = {
  "Full-time":  "bg-blue-50 text-blue-700",
  "Part-time":  "bg-purple-50 text-purple-700",
  "Internship": "bg-green-50 text-green-700",
  "Freelance":  "bg-amber-50 text-amber-700",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Experience</h2>
          <p className="text-gray-600 max-w-xl">
            Where I've worked and what I've contributed.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6"
            >
              {/* Left — timeline dot */}
              <div className="hidden sm:flex flex-col items-center pt-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              </div>

              {/* Right — content */}
              <div className="flex-1 min-w-0">

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.role}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-md shrink-0 ${typeColors[item.type]}`}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Company + meta */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{item.company}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                  <span>·</span>
                  <span>{item.duration}</span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-1.5">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}