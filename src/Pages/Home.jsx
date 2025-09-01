import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import NewsCard from "../Components/NewsCard";
import { Link } from "react-router-dom";
function Home() {
  const videos = [
    "/assets/videos/MVI_2018.MP4",
    "/assets/videos/MVI_2019.MP4",
    "/assets/videos/MVI_2028.MP4",
    "/assets/videos/MVI_2029.MP4",
    "/assets/videos/MVI_2031.MP4",
    "/assets/videos/MVI_2032.MP4",
    "/assets/videos/MVI_2039.MP4",
    "/assets/videos/MVI_2040.MP4",
    "/assets/videos/MVI_2044.MP4",
    "/assets/videos/MVI_2046.MP4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  // Funkcja do przejścia do następnego filmu
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      {/* // Sekcja Hero */}
      <div className="video-container w-full h-[60vh] sm:h-[50vh] md:h-[45vh] lg:h-[40vw] bg-cover bg-center bg-no-repeat relative pt-16 md:pt-20">
        <video
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="video-bg"
        />

        {/* Content - napisy na wierzchu hero */}
        <div className="content flex flex-col text-white justify-center items-start h-full px-4 sm:px-6 md:px-8 lg:px-16 text-wrap relative z-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-SecondColor font-bold leading-tight">
            NEUROCENTRUM
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-ThirdColor font-semibold leading-tight">
            BYDGOSZCZ
          </p>
          <p className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-wrap text-sm sm:text-base md:text-lg lg:text-xl pt-3 md:pt-4 leading-relaxed">
            Specjalizujemy się w diagnozowaniu i leczeniu chorób układu
            nerwowego, takich jak między innymi stwardnienie rozsiane.
          </p>

          <p className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-wrap text-sm sm:text-base md:text-lg pt-2 leading-relaxed">
            Oferujemy kompleksową opiekę, w tym nowoczesne badania
            diagnostyczne, terapię farmakologiczną.
          </p>
        </div>
      </div>
      {/* oddzielacz hero reszta */}
      <div className="z-100 w-[100%] h-2 bg-MainColor flex justify-center items-center"></div>

      {/* sekcja zakres dzialalnosci */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-10 mb-8 md:mb-10 px-4">
        <Link
          to="/BadKlin"
          className="bg-SecondColor w-full max-w-6xl h-20 sm:h-24 md:h-28 lg:h-32 text-left flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 rounded-t-lg text-white"
        >
          <div className="bg-SecondColor w-full max-w-6xl h-20 sm:h-24 md:h-28 lg:h-32 text-left flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 rounded-t-lg text-white">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Badania kliniczne
            </p>
            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-2 lg:gap-4">
          <Link
            to="/Inprogress"
            className="flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 w-full lg:flex-1 h-20 sm:h-24 md:h-28 lg:h-32 bg-MainColor text-white lg:rounded-bl-lg"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-tight">
              Program lekowy leczenia miastenii NFZ
            </p>
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0 ml-2" />
          </Link>

          <Link
            to="/PracEL"
            className="w-full lg:flex-1 h-20 sm:h-24 md:h-28 lg:h-32 flex flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-10 bg-MainColor text-white"
          >
            <div className="flex flex-col justify-center">
              <p className="text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                Pracownia
              </p>
              <p className="text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Elektroneurografii i Elektromiografii
              </p>
            </div>
            <div className="flex items-center">
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0 ml-2" />
            </div>
          </Link>

          <Link
            to="/Inprogress"
            className="flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 w-full lg:flex-1 h-20 sm:h-24 md:h-28 lg:h-32 bg-MainColor text-white lg:rounded-br-lg"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Gabinety neurologiczne
            </p>
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0 ml-2" />
          </Link>
        </div>
      </div>
      {/* Sekcja aktualnosci  oddzielacz*/}
      {/* <div className="z-100 w-[100%] h-2 bg-MainColor flex justify-center items-center"></div> */}

      {/* Główny tytuł - efekt 3D */}
      <div className="relative mb-6 md:mb-8 flex justify-center mt-8 md:mt-10 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-SecondColor relative transform hover:scale-105 transition-transform duration-300 cursor-default text-center">
          AKTUALNOŚCI
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
}

export default Home;
