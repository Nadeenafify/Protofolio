const Education = () => {
  return (
    <section
      id="education"
      className="w-full bg-white text-gray-800 "
    >
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-purple-700">
          Education
        </h2>

        <div className="bg-linear-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-pink-500">
            Bachelor’s Degree in Computer Science & AI
          </h3>

          <p className="text-gray-600 font-medium">
            Benha University • Graduated 2024
          </p>

          <p className="mt-4 text-gray-700">
            Faculty of Computers and Artificial Intelligence
          </p>

          <p className="mt-2 text-gray-700">
            GPA: <strong>3.6</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;