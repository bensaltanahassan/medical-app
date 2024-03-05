import { useState } from "react";
import imageDoc from "../../../assets/doctor.jpg";
import imagePatient from "../../../assets/patient.jpg";
import loginForm from "../../../components/auth/loginFormDoctor";
import LoginForm from "../../../components/auth/loginFormDoctor";
import SignupForm from "../../../components/auth/signupFormDoctor";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-24 ">
        <div className="w-full md:w-3/5 p-4  bg-white border border-gray-200 rounded-lg sm:p-8 shadow-xl">
          {showLogin ? (
            <div className="text-center">
              <h5 className="mb-8 text-3xl font-bold  text-gray-900 ">
                Welcome to MEDICAL APP
              </h5>
              <p className="mb-8 text-base text-gray-500 sm:text-lg ">
                To access the MEDICAL APP, you need to choose a type of access.
              </p>
              <div className="items-center justify-center space-y-4 gap-8 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <a
                  onClick={() => {
                    setShowLogin(!showLogin);
                  }}
                  className="w-full cursor-pointer sm:w-auto shadow shadow-[#16A34A] hover:shadow-[#16A34A] transition ease-in delay-150 hover:shadow-md focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
                  <div className="text-center rtl:text-right">
                    <i className="fa-solid fa-user-doctor text-[#16A34A] text-8xl "></i>
                    <div className="text-gray-500 mt-1 font-sans text-xl font-semibold">
                      Doctor
                    </div>
                  </div>
                </a>
                <a className="w-full sm:w-auto cursor-pointer shadow shadow-[#16A34A] hover:shadow-[#16A34A] transition ease-in delay-150 hover:shadow-md focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
                  <div className="text-center rtl:text-right">
                    <i className="fa-solid fa-user  text-[#16A34A] text-8xl"></i>
                    <div className="text-gray-500 mt-1 font-sans text-xl font-semibold">
                      Patient
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
