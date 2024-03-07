import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/shared/footer/Footer";
import AboutPage from "./pages/about/About";
import LoginPage from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/Register";
import DashboardDoctor from "./pages/dashboard-doctor/DashboardDoctor";
import AppointementPage from "./pages/dashboard-doctor/appointements/AppointementPage";
import DocumentsPage from "./pages/dashboard-doctor/documents/DocumentsPage";
import MessagesPage from "./pages/dashboard-doctor/messages/MessagesPage";
import NotificationsPage from "./pages/dashboard-doctor/notifications/NotificationsPage";
import OverviewPage from "./pages/dashboard-doctor/overview/OverviewPage";
import PatientsPage from "./pages/dashboard-doctor/patients/PatientsPage";
import SettingsPage from "./pages/dashboard-doctor/settings/SettingsPage";
import LandingPage from "./pages/landing/LandingPage";
import ServicesPage from "./pages/services/ServicesPage";

function App() {
  const location = useLocation();
  const isDashboardDoctor = location.pathname.includes("dashboard-doctor");
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
        <Route path="/dashboard-doctor">
          <Route element={<DashboardDoctor />}>
            <Route index element={<OverviewPage />} />
            <Route path="appointments" element={<AppointementPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="patients" element={<PatientsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/dashboard-doctor" replace />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isDashboardDoctor && <Footer />}
    </div>
  );
}

export default App;
