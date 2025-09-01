import React, { useState } from "react";

function AdminBadanie({ badanie, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    nazwa: badanie.nazwa,
    opis: badanie.opis,
    status: badanie.status,
    wymagania: badanie.wymagania,
    terminy: badanie.terminy,
    max_uczestnicy: badanie.max_uczestnicy,
  });
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
        return "Kwalifikacja";
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit({ ...badanie, ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      nazwa: badanie.nazwa,
      opis: badanie.opis,
      status: badanie.status,
      wymagania: badanie.wymagania,
      terminy: badanie.terminy,
      max_uczestnicy: badanie.max_uczestnicy,
    });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-start items-start w-full border border-gray-300 shadow-lg rounded-2xl mb-4 sm:mb-6 overflow-hidden">
      {/* Tytuł + opis + status */}
      <div className="flex w-full bg-gray-100 rounded-t-2xl">
        <div className="p-4 sm:p-6 flex-1">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editData.nazwa}
                onChange={(e) => handleInputChange("nazwa", e.target.value)}
                className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nazwa badania"
              />
              <textarea
                value={editData.opis}
                onChange={(e) => handleInputChange("opis", e.target.value)}
                className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Opis badania"
              />
              <select
                value={editData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
                className="text-sm sm:text-base font-bold bg-white border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="aktywne">Aktywne</option>
                <option value="Kwalifikacja">Kwalifikacja otwarta</option>
                <option value="w_trakcie">W trakcie</option>
                <option value="zakonczone">Zakończone</option>
                <option value="zawieszone">Zawieszone</option>
              </select>
            </>
          ) : (
            <>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 leading-tight">
                {badanie.nazwa}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium leading-relaxed">
                {badanie.opis}
              </p>
              <div
                className={`mt-3 sm:mt-4 rounded-full w-fit px-3 sm:px-4 py-1 sm:py-2 border-2 ${StatusChange(
                  badanie.status
                )}`}
              >
                <p
                  className={`text-xs sm:text-sm font-bold ${StatusChange(
                    badanie.status
                  )}`}
                >
                  {StatusDisplay(badanie.status)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sekcja dolna - wymagania, terminy, ilość uczestników */}
      <div className="flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 w-full flex-1 gap-4 md:gap-6">
        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Wymagania:
          </p>
          {isEditing ? (
            <textarea
              value={editData.wymagania}
              onChange={(e) => handleInputChange("wymagania", e.target.value)}
              className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              placeholder="Wymagania dla uczestników"
            />
          ) : (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {badanie.wymagania}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Terminy:
          </p>
          {isEditing ? (
            <textarea
              value={editData.terminy}
              onChange={(e) => handleInputChange("terminy", e.target.value)}
              className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              placeholder="Terminy badania"
            />
          ) : (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {badanie.terminy}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <p className="font-semibold text-sm sm:text-base text-gray-700 mb-2">
            Max uczestników:
          </p>
          {isEditing ? (
            <input
              type="number"
              value={editData.max_uczestnicy}
              onChange={(e) =>
                handleInputChange("max_uczestnicy", parseInt(e.target.value))
              }
              className="text-sm sm:text-base text-gray-600 bg-white border border-gray-300 rounded px-3 py-2 w-full mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              placeholder="Liczba uczestników"
            />
          ) : (
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {badanie.max_uczestnicy}
            </p>
          )}
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Utworzone:{" "}
            {new Date(badanie.created_at).toLocaleDateString("pl-PL")}
          </p>
        </div>
      </div>

      {/* Przyciski administracyjne */}
      <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 sm:p-6 w-full border-t border-gray-200">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              Zapisz
            </button>
            <button
              onClick={handleCancel}
              className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              Anuluj
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              Edytuj
            </button>
            <button
              onClick={() => onDelete(badanie.id)}
              className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              Usuń
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminBadanie;
