import { useState } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Desktop & Mobile */}
      <div className="fixed top-0 left-0 z-50 flex flex-row justify-between bg-gradient-main w-screen h-16 md:h-20">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <div className="bg-white h-16 md:h-20 w-32 sm:w-40 md:w-48 lg:w-56 flex items-center ">
            <img
              className="p-1 h-full w-auto object-contain"
              src="/assets/neurocentrum-bydgoszcz.svg"
              alt="Neurocentrum Bydgoszcz"
            />
          </div>
        </Link>

        {/* Desktop Menu - ukryty na mobile i tablet */}
        <div className="hidden xl:flex items-center h-full">
          <ul className="flex flex-row items-center w-full h-full text-sm xl:text-base">
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white border-l-white">
              <Link
                to="/InProgress"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Aktualności
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/InProgress"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Zakres działalności
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/rejestracja"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Rejestracja
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/InProgress"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Personel
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/lokalizacja"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Lokalizacja
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/BadKlin"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Badania kliniczne
              </Link>
            </li>
            <li className="h-12 flex items-center px-3 xl:px-4 border-r-2 border-r-white">
              <Link
                to="/InProgress"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Fundacja
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center">
          {/* CTA Button - ukryty na mobile i tablet, widoczny tylko na desktop */}
          <div className="hidden xl:flex bg-white h-16 md:h-20 w-32 md:w-40 lg:w-56 items-center justify-center">
            <Link
              to="/rejestracja"
              className="flex items-center justify-center gap-1 sm:gap-2 bg-MainColor w-fit h-fit p-2 sm:p-3 rounded-lg"
            >
              <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 text-white" />
              <span className="text-white font-medium text-sm md:text-base">
                Zarejestruj się
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden bg-white h-16 md:h-20 w-12 md:w-16 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-MainColor" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-MainColor" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>
          <div className="fixed top-16 md:top-20 left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <ul className="py-2">
              <li>
                <Link
                  to="/InProgress"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Aktualności
                </Link>
              </li>
              <li>
                <Link
                  to="/InProgress"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Zakres działalności
                </Link>
              </li>
              <li>
                <Link
                  to="/rejestracja"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Rejestracja
                </Link>
              </li>
              <li>
                <Link
                  to="/InProgress"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Personel
                </Link>
              </li>
              <li>
                <Link
                  to="/InProgress"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Lokalizacja
                </Link>
              </li>
              <li>
                <Link
                  to="/BadKlin"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Badania kliniczne
                </Link>
              </li>
              <li>
                <Link
                  to="/InProgress"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-100 active:bg-gray-200 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Fundacja
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
