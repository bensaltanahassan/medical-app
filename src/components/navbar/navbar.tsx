import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigate();
  const goToLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigation("/login");
  };
  const goToSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigation("/register");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="flex justify-between p-4 items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer text-green-600">
          MEDICAL
        </div>
        {/* NavLinks */}
        <div className="space-x-4 text-l font-semibold text-black hidden sm:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* Auth Button */}
        <div className="sm:flex items-center space-x-4 hidden">
          <button
            className="font-semibold text-center bg-white hover:bg-gray-100 px-4 py-1 rounded-md"
            onClick={goToLogin}
          >
            Login
          </button>
          <button
            className="bg-green-600 text-white px-4 py-1 rounded-md text-center font-semibold "
            onClick={goToSignUp}
          >
            Sign Up
          </button>
        </div>
        {/* Menu */}
        <div className="sm:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {showMenu ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </div>
      {showMenu && (
        <div className="absolute bg-black w-full h-full top-16 left-0 z-50 sm:hidden">
          <div className="text-l font-semibold text-white flex flex-col justify-evenly items-center h-full pb-10">
            <Link
              to="/"
              className="hover:bg-green-600 hover:text-white px-4 py-1 rounded-md"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-600 hover:text-white px-4 py-1 rounded-md"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:bg-green-600 hover:text-white px-4 py-1 rounded-md"
              onClick={() => setShowMenu(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-600 hover:text-white px-4 py-1 rounded-md"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-4">
              <button
                className="font-semibold text-center bg-white hover:bg-gray-100 text-black px-4 py-1 rounded-md"
                onClick={(e) => {
                  setShowMenu(false);
                  goToLogin(e);
                }}
              >
                Login
              </button>
              <button
                className="bg-green-600 text-white px-4 py-1 rounded-md text-center font-semibold "
                onClick={(e) => {
                  setShowMenu(false);
                  goToSignUp(e);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
