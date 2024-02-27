import { ImageAssets } from "../../core/classes/ImagesAssets";
import { AppConstants } from "../../core/classes/constants";

export default function AboutPage() {
  return (
    <div className="sm:flex sm:gap-10 gap-0 py-4 mb-10">
      {/* Left Side */}
      <div className="sm:w-2/3 flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center sm:justify-start w-full text-yellow-600 text-3xl font-semibold">
          ~ WHO WE ARE
        </div>
        <div className="flex justify-center sm:justify-start w-full text-black  font-bold text-4xl">
          We Help To Get You Well
        </div>
        <div className="text-lg justify-center text-center sm:text-start sm:justify-start  text-gray-600 flex w-full ">
          Welcome to our leading liver cancer care center, where hope meets
          expertise. At {AppConstants.appName}, we are dedicated to providing
          unparalleled care and support for individuals facing the challenges of
          liver cancer. Our mission is to empower lives through personalized
          treatment plans, real-time health monitoring, and a commitment to
          excellence. With cutting-edge technology and a compassionate team of
          experts, we stand by you at every step of your journey. Discover a new
          era of liver cancer care - where your well-being takes center stage.
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-2 mt-8">
          <div className="w-1/2">
            <img src="images/about/hospital.png" alt="" />
          </div>
          <div className="w-1/2 text-sm">
            In our liver cancer center, we provide meticulous diagnostic
            assessments and individualized treatment strategies. Our dedicated
            team of specialists places a high emphasis on patient education,
            empowering you with the knowledge needed to make informed choices
            for your liver health.
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className=" hidden sm:flex sm:w-1/3 justify-center items-center">
        <img
          src={ImageAssets.liver}
          alt=""
          className="h-96 w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
