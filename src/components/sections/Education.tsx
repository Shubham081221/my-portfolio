// src/components/sections/Education.tsx
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Education</h2>
          <p className="text-gray-600 max-w-xl">
            My academic background and qualifications.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              {/* Left — icon */}
              <div className="hidden sm:flex items-start pt-1">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <GraduationIcon />
                </div>
              </div>

              {/* Right — content */}
              <div className="flex-1 min-w-0">

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.degree}
                  </h3>
                  {item.grade && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-green-50 text-green-700 shrink-0">
                      {item.grade}
                    </span>
                  )}
                </div>

                {/* Institution + meta */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{item.institution}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                  <span>·</span>
                  <span>{item.duration}</span>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="flex flex-col gap-1.5">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function GraduationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}