import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import AdminBadanie from "../components/AdminBadanie";
import FormularzBadania from "../components/FormularzBadania";

function Admin() {
  const { isAuthenticated, loginWithRedirect, isLoading, logout, user } =
    useAuth0();

  const [badania, setBadania] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const API_URL = "http://localhost/neurocentrum-api/badania.php";

  // 🔒 Lista dozwolonych adminów
  const allowedAdmins = [
    "maksymilian.gronowski@gmail.com",
    "bonek.robert@gmail.com",
  ];

  // 🔒 Jeśli użytkownik nie jest zalogowany, przekieruj go do logowania
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  // Fetch badania
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
    if (isAuthenticated) {
      fetchBadania();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div className="text-center mt-20">Sprawdzanie logowania...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-20">Przekierowywanie do logowania...</div>
    );
  }

  // 🔒 Sprawdzenie czy użytkownik jest adminem
  if (!user || !user.email) {
    return <div className="text-center mt-20">Ładowanie użytkownika...</div>;
  }

  const userEmail = user.email.toLowerCase();
  const allowedAdminsLower = allowedAdmins.map((e) => e.toLowerCase());

  if (!allowedAdminsLower.includes(userEmail)) {
    return (
      <div className="text-center mt-20 text-red-500">
        <p>Nie masz dostępu do tej strony.</p>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Wyloguj
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mt-16 md:mt-20 mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Panel Administracyjny - Badania
        </h1>
        <div className="text-right">
          <p className="text-sm">Zalogowano jako: {user?.name}</p>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Wyloguj
          </button>
        </div>
      </div>

      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium shadow-md text-sm sm:text-base"
        >
          {showForm ? "Anuluj dodawanie" : "Dodaj nowe badanie"}
        </button>
      </div>

      {showForm && (
        <FormularzBadania
          onSave={handleAddBadanie}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">
          Lista badań ({badania.length})
        </h2>
        {loading ? (
          <p className="text-gray-600 text-center py-8 text-sm sm:text-base">
            Ładowanie badań...
          </p>
        ) : badania.length === 0 ? (
          <p className="text-gray-600 text-center py-8 text-sm sm:text-base">
            Brak badań w bazie danych.
          </p>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {badania.map((badanie) => (
              <AdminBadanie
                key={badanie.id}
                badanie={badanie}
                onEdit={handleEditBadanie}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  async function handleAddBadanie(formData) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        fetchBadania();
        setShowForm(false);
        alert("Badanie dodane pomyślnie!");
      } else {
        alert("Błąd podczas dodawania badania");
      }
    } catch (error) {
      console.error("Błąd:", error);
      alert("Błąd połączenia z serwerem");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Czy na pewno chcesz usunąć to badanie?")) return;

    try {
      const response = await fetch(API_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();
      if (result.success) {
        fetchBadania();
        alert("Badanie usunięte!");
      } else {
        alert("Błąd podczas usuwania badania");
      }
    } catch (error) {
      console.error("Błąd:", error);
      alert("Błąd połączenia z serwerem");
    }
  }

  async function handleEditBadanie(updatedBadanie) {
    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBadanie),
      });

      const result = await response.json();
      if (result.success) {
        fetchBadania();
        alert("Badanie zaktualizowane pomyślnie!");
      } else {
        alert("Błąd podczas aktualizacji badania");
      }
    } catch (error) {
      console.error("Błąd:", error);
      alert("Błąd połączenia z serwerem");
    }
  }
}

export default Admin;
