import { ImageAssets } from "../../core/classes/ImagesAssets";

export default function SecureAccessService() {
  return (
    <div className="flex items-center justify-start color-1 w-full py-10 px-6 rounded-lg">
      <div className="sm:w-1/3 hidden sm:flex">
        <img
          src={ImageAssets.service4}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="sm:w-2/3 ">
        <div
          className="text-3xl font-semibold mb-4"
          style={{ color: "##023047" }}
        >
          Secure Access to Reports
        </div>
        <div className="text-lg flex flex-col gap-2 list-disc text-white">
          <li>
            Convenient access to medical reports, test results, and treatment
            plans through a secure online portal.
          </li>
          <li>
            Patients can review their information, fostering transparency and
            empowering them to actively participate in their liver cancer care.
          </li>
        </div>
      </div>
    </div>
  );
}
