import { ImageAssets } from "../../core/classes/ImagesAssets";

export default function TreatmentService() {
  return (
    <div className="flex items-center justify-start color-5 w-full py-10 px-6 rounded-lg">
      <div className="sm:w-2/3 ">
        <div
          className="text-3xl font-semibold mb-4"
          style={{ color: "##023047" }}
        >
          Personalized Treatment Plans
        </div>
        <div className="text-lg text-gray-600 flex flex-col gap-2 list-disc">
          <li>
            Tailored treatment strategies designed specifically for each patient
            based on their unique liver cancer diagnosis.
          </li>
          <li>
            Rendezvous scheduling for consultations and treatment sessions,
            ensuring a personalized and convenient healthcare experience.
          </li>
        </div>
      </div>
      <div className="sm:w-1/3 hidden sm:flex">
        <img
          src={ImageAssets.service1}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
