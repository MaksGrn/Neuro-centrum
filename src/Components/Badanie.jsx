import React from "react";

function Badanie({
  nazwa = "Nazwa",
  opis = "Opis",
  status = "Zakończone",
  wymagania = "Brak tego, Brak tamtego, to i tamto",
  terminy,
  maxUczestnicy = "30",
}) {
  const StatusChange = (status) => {
    switch (status) {
      case "zawieszone":
        return "border-yellow-500 text-yellow-500";
      case "aktywne":
      case "Kwalifikacja":
        return "text-green-500 border-green-500";
      case "w_trakcie":
        return "border-blue-500 text-blue-500";
      case "zakonczone":
        return "border-red-500 text-red-500";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  const StatusDisplay = (status) => {
    switch (status) {
      case "aktywne":
        return "Aktywne";
      case "Kwalifikacja":
        return "Kwalifikacja otwarta";
      case "w_trakcie":
        return "W trakcie";
      case "zakonczone":
        return "Zakończone";
      case "zawieszone":
        return "Zawieszone";
      default:
        return status;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto border border-gray-300 shadow-lg rounded-2xl overflow-hidden">
        {/* Tytul + opis + status */}
        <div className="flex w-full bg-gray-100 rounded-t-2xl">
          <div className="p-4 sm:p-6 w-full">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-ThirdColor leading-tight">
              {nazwa}
            </p>
            <p className="text-sm sm:text-base text-SecondColor mt-2 font-medium leading-relaxed">
              {opis}
            </p>
            <div
              className={`mt-3 sm:mt-4 rounded-full w-fit px-3 sm:px-4 py-1 sm:py-2 border-2 ${StatusChange(
                status
              )}`}
            >
              <p
                className={`text-xs sm:text-sm font-bold ${StatusChange(
                  status
                )}`}
              >
                {StatusDisplay(status)}
              </p>
            </div>
          </div>
        </div>

        {/* sekcja dolna wymagania terminy ilosc uczestnikow */}
        <div className="flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 w-full gap-4 md:gap-6">
          <div className="w-full md:w-1/3">
            <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
              Wymagania:
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {wymagania}
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
              Terminy:
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {terminy}
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
              Ilość miejsc:
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {maxUczestnicy}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Badanie;
