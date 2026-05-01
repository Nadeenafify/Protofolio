const Hero = () => {
  return (
    <section className="w-full h-screen sm:gap-10 lg:gap-0 bg-linear-to-b from-pink-200 via-purple-300 to-blue-300 text-gray-800 flex flex-col md:flex-row items-center justify-center px-4  lg:px-20">

    
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={"Nadeen.png"} 
          alt="Nadeen Ashraf"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-pink-400 shadow-lg"
        />
      </div>

      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-pink-400">Nadeen Ashraf</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-purple-700">
          Fullstack Engineer 
        </p>
        <a
          href="#projects"
          className="inline-block bg-purple-400 hover:bg-pink-400 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
        >
          View Projects
        </a>
      </div>

    </section>
  );
};

export default Hero;
