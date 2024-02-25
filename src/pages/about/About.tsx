export default function AboutPage() {
  return (
    <div className="sm:flex gap-4 py-4 mb-10">
      {/* Left Side */}
      <div className="sm:w-2/3 flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center sm:justify-start w-full text-yellow-600 text-3xl font-semibold">
          ~ WHO WE ARE
        </div>
        <div className="flex justify-center sm:justify-start w-full text-black  font-bold text-4xl">
          We Help To Get You Well
        </div>
        <div className="text-lg justify-center text-center sm:text-start sm:justify-start  text-gray-600 flex w-full ">
          At our clinic, we specialize in personalized care for heart health.
          Our dedicated team of medical professionals is here to support you on
          your journey to a healthier heart. From comprehensive check-ups to
          tailored treatment plans, we are committed to providing the highest
          quality care for your cardiovascular well-being. Your heart health is
          our priority, and we're here to guide you every step of the way.
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-2 mt-8">
          <div className="w-1/2">
            <img src="images/about/hospital.png" alt="" />
          </div>
          <div className="w-1/2 text-sm">
            At our clinic, we deliver precise cardiac diagnostics and
            personalized treatment plans. Our expert cardiologists prioritize
            patient education, ensuring you're empowered to make informed
            decisions for your heart health.
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className=" hidden sm:flex sm:w-1/3 justify-center items-center">
        <img
          src="images/about/heart.jpg"
          alt=""
          className="h-96 w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
