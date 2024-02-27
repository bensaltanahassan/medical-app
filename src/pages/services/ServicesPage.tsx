import HealthMonitoringService from "../../components/services/HealthMonitoringService";
import NotificationService from "../../components/services/NotificationService";
import SecureAccessService from "../../components/services/SecureAccessService";
import TreatmentService from "../../components/services/TreatmentService";

export default function ServicesPage() {
  return (
    <div className="mb-8">
      <div className="sm:flex gap-4 py-4 mb-10">
        {/* Left Side */}
        <div className="sm:w-1/2 flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center sm:justify-start w-full text-yellow-600 text-3xl font-semibold">
            Comprehensive Liver Cancer Care
          </div>
          <div className="flex justify-center text-center sm:text-start sm:justify-start w-full text-black  font-bold text-4xl">
            Empathy, Expertise, and Excellence in Every Service
          </div>
          <div className="text-lg justify-center text-center sm:text-start sm:justify-start  text-gray-600 flex w-full ">
            Discover dedicated and expert liver cancer care tailored to your
            unique needs. We prioritize your well-being with compassionate
            services aimed at comprehensive support throughout your journey.
          </div>
        </div>
        {/* Right Side */}
        <div className=" hidden sm:flex sm:w-1/2 justify-center items-center">
          <img
            src="images/services/clinic.jpg"
            alt=""
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <TreatmentService />
        <HealthMonitoringService />
        <NotificationService />
        <SecureAccessService />
      </div>
    </div>
  );
}
