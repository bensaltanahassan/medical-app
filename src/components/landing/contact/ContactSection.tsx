export default function ContactSection() {
  return (
    <div className="my-10 p-10 bg-green-950 rounded-lg text-white flex flex-col md:flex-row gap-4 md:h-72  ">
      <div className="md:w-1/2 flex flex-col gap-2">
        <div className="text-sm font-semibold">Need a doctor consealing ?</div>
        <div className="font-bold text-2xl">Request a call back today now </div>
        <div className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          reprehenderit enim nam, quis sit cum aperiam. Eum placeat odio vitae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          adipisci architecto incidunt labore excepturi inventore dolore est
          nihil delectus minus?
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
