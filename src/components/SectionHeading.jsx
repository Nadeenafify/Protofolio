const SectionHeading = ({ eyebrow, title, align = "left" }) => {
  const isCentered = align === "center";

  return (
    <div className={`mb-10 ${isCentered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-700">{title}</h2>
      <span
        className={`mt-4 block h-1 w-16 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 ${
          isCentered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionHeading;
