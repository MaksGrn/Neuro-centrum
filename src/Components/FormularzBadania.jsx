import React, { useState } from "react";

function FormularzBadania({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nazwa: "",
    opis: "",
    status: "aktywne",
    wymagania: "",
    terminy: "",
    max_uczestnicy: 1,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Walidacja - sprawdź czy wszystkie pola są wypełnione
    if (
      !formData.nazwa.trim() ||
      !formData.opis.trim() ||
      !formData.wymagania.trim() ||
      !formData.terminy.trim()
    ) {
      alert("Proszę wypełnić wszystkie pola!");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="flex flex-col justify-start items-start w-full border border-green-300 shadow-lg rounded-2xl mb-4 sm:mb-6 bg-green-50 overflow-hidden">
      {/* Nagłówek formularza */}
      <div className="flex w-full bg-green-100 rounded-t-2xl">
        <div className="p-4 sm:p-6 flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-green-800 mb-4">
            Dodaj nowe badanie
          </h3>

          <input
            type="text"
            value={formData.nazwa}
            onChange={(e) => handleInputChange("nazwa", e.target.value)}
            placeholder="Nazwa badania..."
            className="text-base sm:text-lg md:text-xl font-medium text-gray-800 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />

          <textarea
            value={formData.opis}
            onChange={(e) => handleInputChange("opis", e.target.value)}
            placeholder="Opis badania..."
            className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-3 resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="3"
          />

          <select
            value={formData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            className="text-sm sm:text-base font-bold bg-white border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="aktywne">Aktywne</option>
            <option value="Kwalifikacja otwarta">Kwalifikacja</option>
            <option value="w_trakcie">W trakcie</option>
            <option value="zakonczone">Zakończone</option>
            <option value="zawieszone">Zawieszone</option>
          </select>
        </div>
      </div>

      {/* Sekcja dolna - wymagania, terminy, ilość uczestników */}
      <div className="flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 w-full flex-1 gap-4 md:gap-6">
        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Wymagania:
          </p>
          <textarea
            value={formData.wymagania}
            onChange={(e) => handleInputChange("wymagania", e.target.value)}
            placeholder="Opisz wymagania dla uczestników..."
            className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="4"
          />
        </div>

        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Terminy:
          </p>
          <textarea
            value={formData.terminy}
            onChange={(e) => handleInputChange("terminy", e.target.value)}
            placeholder="Podaj terminy badania..."
            className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="4"
          />
        </div>

        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Max uczestników:
          </p>
          <input
            type="number"
            value={formData.max_uczestnicy}
            onChange={(e) =>
              handleInputChange("max_uczestnicy", parseInt(e.target.value) || 1)
            }
            className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            min="1"
            max="1000"
            placeholder="Liczba uczestników"
          />
          <p className="text-xs sm:text-sm text-gray-500">
            Maksymalna liczba osób, które mogą wziąć udział w badaniu
          </p>
        </div>
      </div>

      {/* Przyciski */}
      <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 sm:p-6 w-full border-t border-green-200">
        <button
          onClick={handleSubmit}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium text-sm sm:text-base"
        >
          Dodaj badanie
        </button>
        <button
          onClick={onCancel}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium text-sm sm:text-base"
        >
          Anuluj
        </button>
      </div>
    </div>
  );
}

export default FormularzBadania;
