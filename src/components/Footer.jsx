
const Footer = () => {
  return (
    <footer className=" text-gray-700 pb-5 pt-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

       
        <div className="">
          <h3 className="text-xl font-bold text-purple-700">Nadeen Ashraf</h3>
          <p className="text-sm text-gray-600">
            Frontend Developer • React • Next.js
          </p>
        </div>

      
        <div className="flex gap-6">
          <a
            href="mailto:your@email.com"
            className="hover:text-purple-600 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
          >
            LinkedIn
          </a>
        </div>

      </div>

    
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Nadeen Ashraf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
