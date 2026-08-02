import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Smart Station Solutions",
    period: "May 2026 – Present",
    current: true,
    points: [
      <>
        Building full stack web applications using <strong>React</strong>,{" "}
        <strong>Next.js</strong>, and <strong>NestJS</strong>.
      </>,
      <>
        Designing and integrating <strong>REST APIs</strong> with{" "}
        <strong>NestJS</strong> and relational databases.
      </>,
    ],
  },
  {
    role: "Frontend Developer",
    company: "TregoTech",
    period: "Apr 2025 – Dec 2025",
    current: false,
    points: [
      <>
        Developed responsive user interfaces using <strong>React</strong> and{" "}
        <strong>Next.js</strong>.
      </>,
      <>
        Built reusable UI components with <strong>Tailwind CSS</strong> and{" "}
        <strong>Bootstrap</strong>.
      </>,
      <>
        Collaborated with designers and backend developers to deliver
        production-ready features.
      </>,
      <>Improved performance and UX across multiple web pages.</>,
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-24 py-16 sm:py-20 text-gray-800"
    >
      <div className="reveal">
        <SectionHeading eyebrow="Career" title="Work Experience" />

        <ol className="relative border-l-2 border-purple-100 ml-3 sm:ml-4 space-y-10">
          {experiences.map((job) => (
            <li key={job.company} className="relative pl-7 sm:pl-10">
              <span className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-linear-to-br from-pink-400 to-purple-500 ring-4 ring-white shadow" />

              <div className="bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-6 sm:p-7 shadow-sm ring-1 ring-purple-100 hover:ring-purple-300 hover:shadow-md transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-pink-500">
                      {job.role}
                    </h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>

                  <span
                    className={`shrink-0 self-start text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm ${
                      job.current
                        ? "bg-purple-600 text-white"
                        : "bg-white text-purple-700"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {job.points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperience;
