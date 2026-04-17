// src/components/sections/Skills.tsx
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Skills</h2>
          <p className="text-gray-600 max-w-xl">
            Technologies and tools I work with on a regular basis.
          </p>
        </div>

        {/* Categories grid — scales as you add more */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5"
            >
              {/* Category label */}
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {category}
              </h3>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}