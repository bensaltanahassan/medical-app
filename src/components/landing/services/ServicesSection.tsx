import CustomService from "./CustomService";

export default function ServicesSection() {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="text-3xl font-bold text-center mb-4">Our Services</div>
        <div className="text-center text-sm text-gray-500 md:w-1/2 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nihil
          et ratione dolore, voluptas quo eveniet explicabo ea quasi id
        </div>
      </div>
      {/* Services */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        <CustomService
          title="Personalized Treatment Plans"
          desc="Receive customized treatment strategies tailored to your unique liver cancer diagnosis."
          image="/images/services/service1.png"
        />
        <CustomService
          title="Real-time Health Monitoring"
          desc="Stay connected with your health in real-time through our advanced monitoring system. "
          image="/images/services/service2.png"
        />
        <CustomService
          title="Notification System"
          desc="Never miss a beat with our notification system. "
          image="/images/services/service3.png"
        />
        <CustomService
          title="Secure Access to Reports"
          desc="Access your medical reports and test results securely through our online portal."
          image="/images/services/service4.png"
        />
      </div>
    </div>
  );
}
