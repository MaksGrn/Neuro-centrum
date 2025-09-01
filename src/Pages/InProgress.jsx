function Inprogress() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 mt-20 md:mt-24 px-4 flex flex-col justify-center items-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-SecondColor font-semibold mb-6">
          Strona w budowie
        </p>

        <div className="max-w-xs sm:max-w-sm md:max-w-md">
          <img
            src="/assets/bob.gif"
            alt="Strona w budowie"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-sm sm:text-base text-gray-600 text-center mt-4 max-w-md">
          Pracujemy nad tą stroną. Wkrótce będzie dostępna!
        </p>
      </main>
    </div>
  );
}

export default Inprogress;
