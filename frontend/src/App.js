import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';
import Registrationpage from "./pages/registrationpage/Registrationpage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
     {/* HOMEPAGE */}
          <Route path="/" element={<Homepage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/registrationpage" element={<Registrationpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
