import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickFloatWidget from "./components/QuickFloatWidget";
import ToastNotification from "./components/ToastNotification";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 4000);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-800">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onShowToast={showToast} />} />
            <Route path="/about" element={<About onShowToast={showToast} />} />
            <Route path="/services" element={<Services onShowToast={showToast} />} />
            <Route path="/doctors" element={<Doctors onShowToast={showToast} />} />
            <Route path="/appointment" element={<Appointment onShowToast={showToast} />} />
            <Route path="/contact" element={<Contact onShowToast={showToast} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating 24/7 Action Widget */}
        <QuickFloatWidget />

        {/* Interactive Toast Notifications */}
        {toastMessage && (
          <ToastNotification
            message={toastMessage}
            onClose={() => setToastMessage("")}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;