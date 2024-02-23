import "./AppointmentSection.css";

export default function AppointmentSection() {
  return (
    <div className="bg-green-600 flex flex-col gap-1 items-center justify-center h-52 my-10 rounded-2xl text-white">
      <div className="font-semibold">Need doctor ?</div>
      <div className="font-bold text-2xl sm:w-1/3 text-center">
        Just make an appointment and motivated
      </div>
      <button className="px-4 py-1 rounded ">Get Appointement</button>
    </div>
  );
}
