function NewsCard({
  title = "Tytuł aktualności",
  description = "Opis aktualności. Krótkie wprowadzenie do treści wiadomości lub artykułu.",
  image = "/assets/IMG_2071.JPG",
  date = "15 stycznia 2025",
}) {
  return (
    <div className="group w-full max-w-sm mx-auto bg-MainColor overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative rounded-lg">
      {/* Sekcja obrazka */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Gradient overlay dla lepszej czytelności */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Nakładka "Czytaj dalej" - ukryta na mobile */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center backdrop-blur-sm hidden sm:flex">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 block">
              Czytaj dalej
            </span>
            <div className="w-12 h-0.5 bg-white mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
          </div>
        </div>

        {/* Data w prawym górnym rogu */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm text-MainColor px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {date}
        </div>
      </div>

      {/* Elegancka linia separująca */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-blue-500 transition-all duration-300"></div>

      {/* Dolna część z lepszą typografią */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between min-h-[120px]">
        <div>
          <h3 className="text-white font-bold text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Subtelny wskaźnik hover */}
        <div className="mt-2 sm:mt-3 flex items-center text-blue-300 group-hover:text-blue-200 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <span className="text-xs font-medium">Więcej</span>
          <svg
            className="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Subtelny border glow effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/30 transition-all duration-300 pointer-events-none rounded-lg"></div>
    </div>
  );
}
export default NewsCard;
