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
          title="Counseling"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          image="/images/services/health.png"
        />
        <CustomService
          title="Support Group"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          image="/images/services/support.png"
        />
        <CustomService
          title="Prescription medicine"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          image="/images/services/tablets.png"
        />
        <CustomService
          title="Emergency Services"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          image="/images/services/stethoscopes.png"
        />
      </div>
    </div>
  );
}
