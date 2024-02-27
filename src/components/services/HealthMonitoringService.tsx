import { ImageAssets } from "../../core/classes/ImagesAssets";

export default function HealthMonitoringService() {
  return (
    <div className="flex items-center justify-start color-2 w-full py-10 px-6 rounded-lg">
      <div className="sm:w-1/3 hidden sm:flex">
        <img
          src={ImageAssets.service2}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="sm:w-2/3 ">
        <div
          className="text-3xl font-semibold mb-4"
          style={{ color: "##023047" }}
        >
          Real-time Health Monitoring
        </div>
        <div className="text-lg text-gray-600 flex flex-col gap-2 list-disc">
          <li>
            Continuous monitoring of the patient's health status through the
            website.
          </li>
          <li>
            Users can follow their health indicators and receive updates on
            their progress, promoting a proactive approach to managing their
            liver cancer journey.
          </li>
        </div>
      </div>
    </div>
  );
}
