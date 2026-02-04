
const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Git & GitHub",
    ];

    return (
        <section
            id="skills"
            className="w-full my-5  text-gray-800"
        >
            <div className="">
                <h2 className="text-3xl sm:text-4xl text-center font-bold mb-10 text-purple-700">
                    Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-white text-purple-600 border border-purple-300 px-5 py-2 rounded-full shadow-sm hover:bg-purple-400 hover:text-white transition duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
