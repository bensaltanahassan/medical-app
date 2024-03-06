import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/shared/footer/Footer";
import AboutPage from "./pages/about/About";
import LoginPage from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/Register";
import DashboardDoctor from "./pages/dashboard-doctor/DashboardDoctor";
import LandingPage from "./pages/landing/LandingPage";
import ServicesPage from "./pages/services/ServicesPage";

function App() {
  const location = useLocation();
  const isDashboardDoctor = location.pathname === "/dashboard-doctor";
  const handleContactClick = () => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`w-full md:w-3/4 m-auto px-4 md:px-0`}
      style={{ width: isDashboardDoctor ? "100%" : "" }}
    >
      {!isDashboardDoctor && <NavBar handleContactClick={handleContactClick} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isDashboardDoctor && <Footer />}
    </div>
  );
}

export default App;
