
const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="w-full  bg-white  text-gray-800"
    >
      <div className="">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-purple-700 ">
          Work Experience
        </h2>

        {/* <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-md p-8"> */}
          <h3 className="text-xl font-semibold text-pink-500">
            Frontend Developer
          </h3>
          <p className="text-gray-600 font-medium">
            TregoTech • Apr 2025 – Dec 2025
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>
              Developed responsive user interfaces using <strong>React</strong> and <strong>Next.js</strong>.
            </li>
            <li>
              Built reusable UI components with <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>.
            </li>
            <li>
              Collaborated with designers and backend developers to deliver production-ready features.
            </li>
            <li>
              Improved performance and UX across multiple web pages.
            </li>
          </ul>
        {/* </div> */}
      </div>
    </section>
  );
};

export default WorkExperience;
