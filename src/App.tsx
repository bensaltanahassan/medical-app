import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import AboutPage from "./pages/about/About";
import LoginPage from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/Register";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <div className="w-full  md:w-3/4 m-auto">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
