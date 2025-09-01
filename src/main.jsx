import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import Home from "./Pages/Home.jsx";
import InProgress from "./Pages/InProgress.jsx";
import BadKlin from "./Pages/BadaniaKliniczne.jsx";
import Admin from "./Pages/Admin.jsx";
import Contact from "./Pages/Contact.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Lokalizacja from "./Pages/Lokalizacja.jsx";
import PracEL from "./Pages/PracEL.jsx";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-rp5j8lcfghrcqn70.us.auth0.com"
      clientId="oCuYoszqbpaImc4dMQUWL4IR0iZQqrrf"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InProgress" element={<InProgress />} />
          <Route path="/BadKlin" element={<BadKlin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Miast" element={<div>Strona Usługi</div>} />
          <Route path="/PracEiE" element={<div>Strona Usługi</div>} />
          <Route path="/GabNeuro" element={<div>Strona Usługi</div>} />
          <Route path="/rejestracja" element={<Contact />} />
          <Route path="/lokalizacja" element={<Lokalizacja />} />
          <Route path="/PracEL" element={<PracEL />} />
          <Route
            path="/kontakt"
            element={<Navigate to="/rejestracja" replace />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Auth0Provider>
  </StrictMode>
);
