import Reason from "./Reason";

export default function ContactReasonSection() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="text-center flex flex-col justify-center items-center mb-4">
        <div className="font-semibold">Why Shloud you take our services!</div>
        <div className="text-sm text-gray-500 sm:w-2/3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          cupiditate repudiandae sapiente fugiat nesciunt. Ad
        </div>
      </div>
      <div className="flex flex-row gap-10 w-full mt-5">
        {/* Image */}
        <div className="w-1/2 hidden md:flex">
          <img
            alt=""
            src="images/doctors.jpg"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className=" md:w-2/3 flex flex-col gap-8 justify-between">
          <Reason
            title="Experience"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, dolore modi omnis nostrum molestias in repellat, illum maxime ea."
          />
          <Reason
            title="Commitment"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, dolore modi omnis nostrum molestias in repellat, illum maxime ea."
          />
          <Reason
            title="Facilities"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, dolore modi omnis nostrum molestias in repellat, illum maxime ea."
          />
          <Reason
            title="Relationships"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, dolore modi omnis nostrum molestias in repellat, illum maxime ea."
          />
        </div>
      </div>
    </div>
  );
}
