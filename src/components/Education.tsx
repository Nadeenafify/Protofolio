import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full scroll-mt-24 py-16 sm:py-20 text-gray-800"
    >
      <div className="reveal">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="relative overflow-hidden bg-linear-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-sm ring-1 ring-purple-100 p-7 sm:p-9">
          <span className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-bfrom-pink-400 via-purple-400 to-blue-400" />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-500">
                Bachelor's Degree in Computer Science &amp; AI
              </h3>
              <p className="text-gray-600 font-medium mt-1">
                Benha University — Faculty of Computers and Artificial Intelligence
              </p>
            </div>

            <span className="shrink-0 self-start bg-white text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              Graduated 2024
            </span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-xl">
            <span className="text-sm text-gray-600">GPA</span>
            <span className="text-lg font-bold text-purple-700">3.6</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
