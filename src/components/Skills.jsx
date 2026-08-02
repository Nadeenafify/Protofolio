import SectionHeading from "./SectionHeading";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Bootstrap",
            "JavaScript",
            "TypeScript",
            "React",
            "React Native",
            "Next.js",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "NestJS", "JWT"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Fundamentals",
        skills: [
            "OOP",
            "Design Patterns",
            "SOLID Principles",
            "Data Structures & Algorithms",
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full scroll-mt-24 py-16 sm:py-20 text-gray-800"
        >
            <div className="reveal">
                <SectionHeading eyebrow="What I work with" title="Skills" align="center" />

                <div className="grid gap-6 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-6 shadow-sm ring-1 ring-purple-100 hover:ring-purple-300 transition duration-300"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 mb-4">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white text-purple-600 border border-purple-200 px-4 py-1.5 text-sm rounded-full shadow-sm hover:bg-purple-500 hover:border-purple-500 hover:text-white hover:-translate-y-0.5 transition duration-300 cursor-default"
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
};

export default Skills;
