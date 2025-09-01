import React from "react";

// Reusable contact section block
function ContactSection({
  title,
  description,
  phone,
  email,
  address,
  hours,
  extra,
}) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-5">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {description && <p className="mt-1 text-gray-600">{description}</p>}

      <div className="mt-4 space-y-1 text-sm text-gray-800">
        {phone && (
          <p>
            Telefon:{" "}
            {Array.isArray(phone) ? (
              phone.map((p, i) => (
                <a
                  key={i}
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="text-blue-700 hover:underline ml-1 mr-2"
                >
                  {p}
                </a>
              ))
            ) : (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-blue-700 hover:underline ml-1"
              >
                {phone}
              </a>
            )}
          </p>
        )}
        {email && (
          <p>
            E-mail:
            {Array.isArray(email) ? (
              email.map((e, i) => (
                <a
                  key={i}
                  href={`mailto:${e}`}
                  className="text-blue-700 hover:underline ml-1 mr-2"
                >
                  {e}
                </a>
              ))
            ) : (
              <a
                href={`mailto:${email}`}
                className="text-blue-700 hover:underline ml-1"
              >
                {email}
              </a>
            )}
          </p>
        )}
        {address && (
          <p>
            Adres: <span className="ml-1">{address}</span>
          </p>
        )}
        {hours && (
          <p>
            Godziny: <span className="ml-1">{hours}</span>
          </p>
        )}
        {extra && <div className="pt-2 text-gray-700 text-sm">{extra}</div>}
      </div>
    </section>
  );
}

export default function Contact() {
  // EDIT THIS ARRAY to add/remove sections easily
  const sections = [
    {
      key: "badania-kliniczne",
      title: "Badania kliniczne",
      description: "Zapisy, informacje o kwalifikacji i terminach wizyt.",
      phone: ["+48 572 779 777"],
      hours: "Pn–Pt 9:00–16:00",
    },
    {
      key: "gabinety-neurologiczne",
      title: "Rejestracja",
      description: "Rejestracja - gabinety neurologiczne.",
      phone: ["+48 572 779 777"],

      hours: "Pn–Pt 9:00–16:00",
    },
    {
      key: "inne-pracownie",
      title: "Inne pracownie",
      description: "Pracownia EMG, ENG.",
      phone: ["+48 572 779 777"],

      hours: "Pn–Pt 9:00–16:00",
    },
    {
      key: "inne-pracownie",
      title: "Rejestracja",
      description: "Dr n. med. Roberta Bonek",
      phone: ["+48 696 045 664 "],

      hours: "Pn–Pt 9:00–18:00",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-32">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Kontakt</h1>
          <p className="text-gray-600 mt-1">
            Wybierz odpowiednią sekcję, aby skontaktować się z właściwą
            rejestracją.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <ContactSection key={s.key} {...s} />
          ))}
        </div>

        {/*
          Jak dodawać/usuwać bloki?
          - Dodaj nowy obiekt do tablicy `sections` (title, phone, email, itd.)
          - Usuń obiekt z `sections`, aby usunąć blok
          - Pola opcjonalne: description, address, hours, extra (możesz pominąć)
        */}
      </div>
    </main>
  );
}
