import SectionHeading from "./SectionHeading";

const highlights = [
  { value: "1+", label: "Years of experience" },
  { value: "7+", label: "Projects shipped" },
  { value: "3.6", label: "GPA — CS & AI" },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-full scroll-mt-24 py-16 sm:py-20 text-gray-800">
      <div className="reveal">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-7 sm:p-9 shadow-sm ring-1 ring-purple-100">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              Hi! I'm Nadeen Ashraf, a passionate Full Stack Engineer who loves
              building beautiful and responsive web applications using React,
              React Native, Next.js, Node.js, and Tailwind CSS. I enjoy turning
              ideas into complete end-to-end solutions and building scalable
              frontend and backend systems.
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 text-center lg:text-left shadow-sm ring-1 ring-purple-100 hover:ring-purple-300 transition duration-300"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-gradient">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
