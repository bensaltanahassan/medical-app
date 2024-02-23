import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="md:h-64 bg-slate-100 px-6 pt-6 pb-4 flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row h-full mb-1 border-b-2 pb-3 gap-4 items-center">
        <div className="sm:w-1/2 flex flex-col sm:flex-row gap-4">
          {/* Infos */}
          <div className="sm:w-1/2 flex flex-col h-full justify-center items-center sm:justify-between sm:items-start">
            <div className="text-xl font-bold text-green-600">
              ENSAS MEDICAL
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center sm:justify-between sm:items-start">
              <div className="text-xs text-gray-500 text-center sm:text-start">
                Lorem ipsum dolsssor sit amet, consectetur adipisicing elit.
                Numquam minus accusamus voluptatum repellat, ullam harum
                incidunt obcaecati
              </div>
              <div className="flex gap-2 ">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          </div>

          {/*QUIK LINKS */}
          <div className="sm:w-1/2 flex flex-col h-full justify-center items-center sm:justify-between sm:items-start">
            <div className="text-xl font-bold text-green-900">QUIK LINKS</div>
            <div className="flex flex-col gap-1">
              <Link to="/" className="underline text-sm">
                Home
              </Link>
              <Link to="/" className="underline text-sm">
                About
              </Link>
              <Link to="/" className="underline text-sm">
                Doctors
              </Link>
              <Link to="/" className="underline text-sm">
                Services
              </Link>
              <Link to="/" className="underline text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 flex flex-col sm:flex-row gap-4">
          {/*SERVICES */}
          <div className="sm:w-1/2 flex flex-col h-full justify-center items-center sm:justify-between sm:items-start">
            <div className="text-xl font-bold text-green-900">SERVICES</div>
            <div className="flex flex-col gap-1">
              <Link to="/" className="underline text-sm">
                Services 1
              </Link>
              <Link to="/" className="underline text-sm">
                Services 2
              </Link>
              <Link to="/" className="underline text-sm">
                Services 3
              </Link>
              <Link to="/" className="underline text-sm">
                Services 4
              </Link>
              <Link to="/" className="underline text-sm">
                Services 5
              </Link>
            </div>
          </div>

          {/*Location */}
          <div className="sm:w-1/2 flex flex-col h-full justify-center items-center sm:justify-between sm:items-start">
            <div className="text-xl font-bold text-green-900">Location</div>
            <div className="flex flex-col gap-1">
              Ensa Safi,Sidi Bouzid ,Safi MOROCCO
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-1">2024 All Right Reserved</div>
    </div>
  );
}
