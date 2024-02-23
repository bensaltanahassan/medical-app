import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero flex items-center p-4 md:p-0 flex-col md:flex-row justify-center ">
      <div className=" text-center md:text-start md:w-1/2 ">
        <div className="text-5xl font-bold">
          We will help you to improve your your mental health
        </div>
        <div className="text-xl font-semibold text-gray-600 mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
          corrupti nobis ad illum sit impedit, excepturi iusto culpa illo
        </div>
        <button className="bg-green-600 text-white px-4 py-1 rounded-md text-center font-semibold mt-6">
          Get Appointment
        </button>
      </div>
      {/* Image */}
      <div className="hidden md:flex md:w-1/2">
        <img alt="" src="images/doctor.png" />
      </div>
    </div>
  );
}
