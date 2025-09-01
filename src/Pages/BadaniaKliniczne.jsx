import { useState, useEffect } from "react";
import Badanie from "../components/Badanie.jsx";

function BadaniaKliniczne() {
  const [badania, setBadania] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("aktualne"); // "aktualne" lub "zakonczone"

  const API_URL = "http://localhost/neurocentrum-api/badania.php";

  // Fetch badania from API
  const fetchBadania = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBadania(data);
      setLoading(false);
    } catch (error) {
      console.error("Błąd pobierania badań:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBadania();
  }, []);

  // Filter badania based on active tab
  const filteredBadania = badania.filter((badanie) => {
    if (activeTab === "aktualne") {
      return badanie.status !== "zakonczone";
    } else {
      return badanie.status === "zakonczone";
    }
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-600">Ładowanie badań...</div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-16 md:top-20 left-0 z-40 w-full h-2 bg-gradient-main flex justify-center items-center"></div>
      {/* ^ rozdzielacz */}

      {/* Nagłówek */}
      <div className="relative flex justify-center mt-20 md:mt-24 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-SecondColor relative transform text-center">
          Badania kliniczne
        </h2>
      </div>

      {/* Opis sekcji */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          Prowadzimy badania kliniczne w zakresie chorób układu nerwowego:
          stwardnienie rozsiane (MS), miastenia (MG), przewlekła zapalna
          polineuropatia demielinizacyjna (CIDP). Posiadamy doświadczony
          personel medyczny i pomocniczy, który zapewnia naszym pacjentom opiekę
          zgodną z najwyższymi standardami. W większości przypadków są to
          wieloletnie badania, które umożliwiają pacjentom skorzystanie z
          najnowocześniejszych leków na długo przed ich rejestracją/refundacją
          oraz w przypadkach kiedy tradycyjne metody leczenia zawiodły bądź są
          niedostępne.
        </p>
      </div>

      {/* Wybór sekcji: zakończone / aktualne */}
      <div className="flex flex-col sm:flex-row justify-center mt-6 md:mt-10 px-4 gap-2 sm:gap-4">
        <div
          className={`shadow-xl drop-shadow-xl w-full sm:w-1/2 max-w-md h-16 sm:h-20 md:h-24 text-center flex justify-center items-center border-b-2 cursor-pointer transition-all duration-200 rounded-lg sm:rounded-none ${
            activeTab === "aktualne"
              ? "bg-blue-100 border-blue-500"
              : "bg-white border-SecondColor hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("aktualne")}
        >
          <p
            className={`font-light text-lg sm:text-xl md:text-2xl lg:text-3xl ${
              activeTab === "aktualne" ? "text-blue-600" : "text-SecondColor"
            }`}
          >
            Aktualne ({badania.filter((b) => b.status !== "zakonczone").length})
          </p>
        </div>
        <div
          className={`shadow-xl drop-shadow-xl w-full sm:w-1/2 max-w-md h-16 sm:h-20 md:h-24 text-center flex justify-center items-center border-b-2 cursor-pointer transition-all duration-200 rounded-lg sm:rounded-none ${
            activeTab === "zakonczone"
              ? "bg-red-100 border-red-500"
              : "bg-white border-SecondColor hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("zakonczone")}
        >
          <p
            className={`font-light text-lg sm:text-xl md:text-2xl lg:text-3xl ${
              activeTab === "zakonczone" ? "text-red-600" : "text-SecondColor"
            }`}
          >
            Zakończone (
            {badania.filter((b) => b.status === "zakonczone").length})
          </p>
        </div>
      </div>

      <div className="w-auto h-auto flex justify-center items-start mt-8"></div>

      {/* Lista badań */}
      <div className="flex flex-col justify-start items-center space-y-4 sm:space-y-6 px-4 pb-10 max-w-6xl mx-auto">
        {filteredBadania.length === 0 ? (
          <div className="text-center py-8 sm:py-10">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
              {activeTab === "aktualne"
                ? "Brak aktualnych badań"
                : "Brak zakończonych badań"}
            </p>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
              Sprawdź ponownie później lub skontaktuj się z nami.
            </p>
          </div>
        ) : (
          filteredBadania.map((badanie) => (
            <Badanie
              key={badanie.id}
              nazwa={badanie.nazwa}
              opis={badanie.opis}
              status={badanie.status}
              wymagania={badanie.wymagania}
              terminy={badanie.terminy}
              maxUczestnicy={badanie.max_uczestnicy}
            />
          ))
        )}
      </div>
    </>
  );
}

export default BadaniaKliniczne;
