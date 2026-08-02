import SectionHeading from "./SectionHeading";

const projects = [
    {
        id: 1,
        title: "Food Ordering App Website",
        description:
            "A modern web app that allows users to browse restaurants, order food, add items to favorites, and securely checkout using Auth0 authentication.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Vite",
            "Tailwind CSS",
            "Auth0",
            "Context API"
        ],
        image: "FoodOrder.png",
        github: "https://github.com/Nadeenafify/Food-Order-Online-React",
        demo: "https://food-order-online-react-m1qr.vercel.app/"
    },
    {
        id: 2,
        title: "Hotel Book Wesite",
        description:
            "A hotel booking application where users can search hotels, view details, book rooms, and experience a fully localized interface with i18n support and Firebase backend.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "i18n",
            "Firebase",
            "Context API"
        ],
        image: "HotelBook.png",
        github: "https://github.com/Nadeenafify/Hotel-Booking-React-Website",
        demo: "https://hotel-booking-react-website-yqpf.vercel.app/"
    },
    {
        id: 3,
        title: "E-Commerce Store Website",
        description:
            "An online shopping platform with product search, filtering, cart management, and payment integration using Firebase and Redux Toolkit.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Firebase",
            "Redux Toolkit"
        ],
        image: "Ecommerce.png",
        github: "https://github.com/Nadeenafify/Ecommrece-Website-REACT-",
        demo: "https://ecommrece-website-react-8mxg-1t4a094nf-food3.vercel.app/"
    },
    {
        id: 4,
        title: "AI Resume Builder Website",
        description:
            "A React-based tool that helps users create professional AI-generated resumes with customizable templates and content stored via Strapi CMS.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Vite",
            "Strapi"
        ],
        image: "AiResume.png",
        github: "https://github.com/Nadeenafify/Ai-resume-builder",
        demo:
            "https://www.linkedin.com/feed/update/urn:li:activity:7296517520394481665/?originTrackingId=8TjNnsoDRsejJn6mEzDjjg%3D%3D"
    },
    {
        id: 5,
        title: "Bus Reservation Wesite",
        description:
            "A bus reservation web application where users can search trips, book seats, manage reservations, and complete payments, built with a Supabase backend.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JWT",
            "Stripe (payment)",
            "MySQL"
        ],
        image: "busReservations.png",
        github:
            "https://github.com/Nadeenafify/FullStack-Bus_Trips_Reservations-",
        demo:
            "https://drive.google.com/file/d/1ulF-Zxp07MinH5UzRtZY-H7dH-8IeKYt/view?usp=sharing"
    },
    {
        id: 6,
        title: "Shopzy E-Commerce APP",
        description:
            "A mobile e-commerce application built with React Native where users can browse products, manage cart, and purchase items using Supabase backend.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React Native",
            "Tailwind CSS",
            "Supabase"
        ],
        image: "shopzy.png",
        github:
            "https://github.com/Nadeenafify/shopzy-Ecommerce-ReactNative-App?tab=readme-ov-file",
        demo:
            "https://drive.google.com/file/d/1nek9rGdwUN2WrawXLRcz4lHuKJfAlEez/view"
    },
    {
        id: 7,
        title: "Food Order APP",
        description:
            "A mobile e-commerce application built with React Native where users can browse products, manage their cart, and place food orders seamlessly.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React Native",
            "Tailwind CSS",
            "Zustand",
            "Firebase"
        ],
        image: "FoodOrderApp.jpeg",
        github: "https://github.com/Nadeenafify/FoodOrder-React-NAtive",
        demo:
            "https://drive.google.com/file/d/18GPT9E2z1ecZ3vgp8YE2pn5sRxGdMMEv/view?usp=sharing"
    }
];


const isVideoDemo = (url) =>
    url.includes("drive.google.com") || url.includes("linkedin.com");

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full scroll-mt-24 py-16 sm:py-20 text-gray-800"
        >
            <div className="reveal">
                <SectionHeading eyebrow="Selected work" title="Projects" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-sm ring-1 ring-purple-100 overflow-hidden hover:shadow-xl hover:ring-purple-300 hover:-translate-y-1.5 transition duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                            </div>

                            <div className="flex flex-col grow p-5">
                                <h3 className="text-lg font-semibold mb-2 text-pink-500">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-white/80 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-purple-600 hover:bg-pink-500 text-white px-4 py-2 rounded-full transition duration-300 text-sm font-medium shadow-sm"
                                    >
                                        {isVideoDemo(project.demo) ? "Watch Demo" : "Live Demo"}
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-purple-300 text-purple-600 hover:bg-purple-500 hover:border-purple-500 hover:text-white px-4 py-2 rounded-full transition duration-300 text-sm font-medium"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
