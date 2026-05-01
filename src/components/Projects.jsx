
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


const Projects = () => {
    return (
        <section id="projects" className="w-full  bg-white  text-gray-800">
            <div className="">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-purple-700">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a

                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.id} className="bg-linear-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">


                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2 text-pink-500">{project.title}</h3>
                                <p className="text-gray-700 mb-3">{project.description}</p>


                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm">{tech}</span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white px-4 py-2 rounded-full transition duration-300 text-sm font-medium"
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
