const contacts = [
  {
    label: "Email",
    value: "nadeenashraf995@gmail.com",
    href: "mailto:nadeenashraf995@gmail.com",
    path: "M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.1 7.8 5.2 7.8-5.2a.5.5 0 0 0-.3-.1h-15a.5.5 0 0 0-.3.1ZM20 8.4l-7.45 4.96a1 1 0 0 1-1.1 0L4 8.4v9.1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.4Z",
  },
  {
    label: "GitHub",
    value: "github.com/Nadeenafify",
    href: "https://github.com/Nadeenafify",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49l-.01-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "LinkedIn",
    value: "in/nadeen-ashraf",
    href: "https://www.linkedin.com/in/nadeen-ashraf-6795a122a/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.67c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4V9Z",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full scroll-mt-24 pt-16 sm:pt-20 pb-8 text-gray-700">
      <div className="bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl ring-1 ring-purple-100 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-3">
          Let's work together
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          I'm always open to new opportunities and interesting projects. Feel
          free to reach out — I'd love to hear from you.
        </p>

        <a
          href="mailto:nadeenashraf995@gmail.com"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-pink-500 text-white font-semibold py-3 px-7 rounded-full transition duration-300 shadow-lg hover:-translate-y-0.5"
        >
          Say Hello
        </a>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/80 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-purple-600 shrink-0"
              >
                <path d={contact.path} />
              </svg>
              <span className="text-sm text-gray-700 truncate">{contact.value}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-100 pt-6">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-gradient">Nadeen Ashraf</h3>
          <p className="text-sm text-gray-600">
            Full Stack Engineer • React • Next.js • NestJS
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nadeen Ashraf. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-medium text-purple-600 hover:text-pink-500 transition"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
