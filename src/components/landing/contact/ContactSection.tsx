export default function ContactSection() {
  return (
    <div className="my-10 p-10 bg-green-950 rounded-lg text-white flex flex-col md:flex-row gap-4 md:h-72  ">
      <div className="md:w-1/2 flex flex-col gap-2">
        <div className="text-sm font-semibold">Need a doctor consealing ?</div>
        <div className="font-bold text-2xl">
          Request a call back today and take the first step towards better
          health.
        </div>
        <div className="text-xs text-gray-400">
          Experience personalized care and professional guidance. Our team of
          compassionate doctors is ready to provide expert advice tailored to
          your unique health needs. Don't hesitate to reach out for a
          consultation. Your well-being is our priority.
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-between gap-4 md:gap-0">
        <input
          placeholder="Your name"
          className="px-4 py-2 rounded text-start"
        />
        <input
          placeholder="Your Phone Number"
          className="px-4 py-2 rounded text-start"
        />
        <input placeholder="Date" className="px-4 py-2 rounded text-start" />
        <button className="bg-green-600 w-32 rounded text-center py-1">
          Request Now
        </button>
      </div>
    </div>
  );
}
