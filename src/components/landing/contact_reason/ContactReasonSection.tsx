import Reason from "./Reason";

export default function ContactReasonSection() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="text-center flex flex-col justify-center items-center mb-4">
        <div className="font-semibold">Why Shloud you take our services!</div>
        <div className="text-sm text-gray-500 sm:w-2/3 text-center">
          Discover the reasons why choosing our services is a decision you won't
          regret.
        </div>
      </div>
      <div className="flex flex-row gap-10 w-full mt-5">
        {/* Image */}
        <div className="w-1/2 justify-center items-center hidden md:flex">
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
            desc="Benefit from a wealth of experience that sets us apart. Our dedicated team brings years of expertise to provide you with top-notch liver cancer care. Your well-being is our priority, and our seasoned professionals ensure a comprehensive and personalized approach to your treatment."
          />
          <Reason
            title="Commitment"
            desc="Our commitment to your health goes beyond the conventional. We are dedicated to delivering excellence in liver cancer care. From precise diagnostics to personalized treatment plans, we stand by you at every step of your journey."
          />
          <Reason
            title="Facilities"
            desc="Experience cutting-edge facilities designed to meet the highest standards of care. Our state-of-the-art infrastructure ensures that you receive the latest advancements in liver cancer treatment."
          />
          <Reason
            title="Relationships"
            desc="Building strong relationships with our patients is at the heart of what we do. We believe in open communication, trust, and collaboration. Our focus is not only on treating liver cancer but also on fostering a supportive relationship with you."
          />
        </div>
      </div>
    </div>
  );
}
