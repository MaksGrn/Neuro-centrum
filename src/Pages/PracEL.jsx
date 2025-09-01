function SectionCard({
  title,
  children,
  reverse = false,
  titleWidth = "sm:w-64",
}) {
  // reverse = true odwraca kolejność na >= sm
  return (
    <section
      className={`flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-between
                  rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm`}
    >
      <div
        className={`${titleWidth} bg-MainColor text-center flex items-center justify-center text-white 
                    rounded-t-xl ${
                      reverse
                        ? "sm:rounded-r-xl sm:rounded-tl-none"
                        : "sm:rounded-l-xl sm:rounded-tr-none"
                    } px-4 py-4`}
      >
        <p className="text-xl md:text-2xl font-semibold">{title}</p>
      </div>
      <div className="text-left p-5 md:p-6 lg:p-8 font-medium space-y-4">
        {children}
      </div>
    </section>
  );
}

function PracEL() {
  return (
    <div className="min-h-screen flex flex-col mt-15">
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-6 md:space-y-8">
          {/* EMG */}
          <SectionCard title="Elektromiografia">
            <p>
              Elektromiografia (EMG) – badanie dodatkowe uzupełniające
              diagnostykę neurologiczną. Ma na celu ocenę funkcji mięśni. Jest
              wykorzystywane w diagnostyce wielu chorób mięśni. Badanie polega
              na ocenie reakcji mięśnia na bodziec elektryczny doprowadzany do
              mięśnia specjalną elektrodą igłową (jednorazowego użytku),
              wkłuwaną do mięśnia.
            </p>
            <p>
              Czas trwania badania uzależniony jest od ilości badanych mięśni.
            </p>
            <p>
              Badanie elektromiograficzne (EMG), w znaczącej większości
              przypadków, powinno być poprzedzone wykonaniem badania
              elektroneurograficznego (ENG).
            </p>
          </SectionCard>

          {/* ENG */}
          <SectionCard title="Elektroneurografia" reverse>
            <p>
              Elektroneurografia (ENG) – badanie dodatkowe uzupełniające
              diagnostykę neurologiczną. Ma na celu ocenę funkcji nerwów
              obwodowych (włókien czuciowych i ruchowych). Jest wykorzystywane w
              diagnostyce wielu chorób obwodowego układu nerwowego.
            </p>
            <p>
              Badanie polega na stymulacji badanych nerwów prądem (o niewielkim
              natężeniu) oraz odbiorze bodźców przy użyciu elektrod
              powierzchniowych, umieszczonych na powierzchni skóry.
            </p>
            <p>
              Czas trwania badania uzależniony jest od ilości badanych nerwów.
            </p>
          </SectionCard>

          {/* Przygotowanie */}
          <SectionCard title="Przygotowanie do badania" titleWidth="sm:w-72">
            <div className="space-y-2">
              <p>W dniu badania (przed wykonaniem badania):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Należy dokładnie umyć badaną część ciała (ciepłą wodą z
                  mydłem).
                </li>
                <li>
                  Przeciwwskazane jest używanie kremów, maści lub balsamów na
                  skórę w okolicy badania.
                </li>
                <li>
                  W okresie jesienno-zimowym przed badaniem należy ogrzać badaną
                  kończynę.
                </li>
                <li>
                  Usunąć z badanej okolicy metalowe elementy (np. biżuterię).
                </li>
              </ul>
            </div>

            <p>
              Bezpośrednio przed rozpoczęciem badania należy poinformować osobę
              wykonującą badanie o aktualnie przyjmowanych lekach.
            </p>

            <div className="space-y-2">
              <p className="font-bold text-xl md:text-2xl">
                Przeciwwskazania do badania
              </p>
              <p>
                Elektroneurografia (ENG) nie może być wykonywana u pacjentów,
                którzy mają wszczepiony stymulator serca lub kardiowerter.
                Przeciwwskazaniami są również zmiany na skórze (np. rany,
                owrzodzenia) oraz opatrunki gipsowe nad miejscem, gdzie
                przebiega nerw.
              </p>
              <p>
                Elektromiografia (EMG) nie może być wykonywana u pacjentów z
                chorobami układu krzepnięcia lub przyjmujących leki
                przeciwkrzepliwe (np. Acenokumarol, Sintrom, Warfin, Xarelto,
                Pradaxa).
              </p>
              <p>
                Pacjenci chorujący na miastenię, w dniu wykonywania badania nie
                mogą przyjmować leków stosowanych przeciw miastenii.
              </p>
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  );
}

export default PracEL;
