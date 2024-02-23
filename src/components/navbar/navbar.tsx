import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigation = useNavigate();
  const goToLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigation("/login");
  };
  const goToSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigation("/register");
  };
  return (
    <div className="flex justify-between p-4 items-center h-16">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer text-green-600">
        MEDICAL
      </div>
      {/* NavLinks */}
      <div className="flex space-x-4 text-l font-semibold text-black">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* Auth Button */}
      <div className="flex items-center space-x-4">
        <button className="font-semibold text-center" onClick={goToLogin}>
          Login
        </button>
        <button
          className="bg-green-600 text-white px-4 py-1 rounded-md text-center font-semibold "
          onClick={goToSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
