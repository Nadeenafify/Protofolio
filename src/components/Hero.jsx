const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Nadeenafify",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49l-.01-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nadeen-ashraf-6795a122a/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.67c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4V9Z",
  },
  {
    label: "Email",
    href: "mailto:nadeenashraf995@gmail.com",
    path: "M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.1 7.8 5.2 7.8-5.2a.5.5 0 0 0-.3-.1h-15a.5.5 0 0 0-.3.1ZM20 8.4l-7.45 4.96a1 1 0 0 1-1.1 0L4 8.4v9.1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.4Z",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-linear-to-bfrom-pink-200 via-purple-300 to-blue-300 text-gray-800"
    >
      {/* Ambient background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-16 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300/50 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/50 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-24 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pt-28 pb-24 md:py-24">
        <div className="md:w-5/12 flex justify-center shrink-0">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-linear-to-trfrom-pink-400 via-purple-400 to-blue-400 blur-xl opacity-70" />
            <img
              src="Nadeen.png"
              alt="Nadeen Ashraf"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/80 shadow-2xl"
            />
          </div>
        </div>

        <div className="md:w-7/12 text-center md:text-left">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
            </span>
            Currently at Smart Station Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Nadeen Ashraf</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-800 mb-4">
            Full Stack Engineer
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mb-8">
            I build responsive, end-to-end web and mobile products with React,
            Next.js and NestJS — from polished interfaces to the APIs behind them.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-pink-500 text-white font-semibold py-3 px-7 rounded-full transition duration-300 shadow-lg hover:shadow-pink-300/50 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-purple-700 font-semibold py-3 px-7 rounded-full transition duration-300 shadow-md hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-purple-700 hover:bg-purple-600 hover:text-white transition duration-300 shadow-sm hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-purple-800/70 hover:text-purple-900 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
