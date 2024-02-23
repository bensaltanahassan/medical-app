import CustomService from "./CustomService";

export default function ServicesSection() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="text-3xl font-bold text-center mb-4">Our Services</div>
        <div className="text-center text-sm text-gray-500 md:w-1/2 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nihil
          et ratione dolore, voluptas quo eveniet explicabo ea quasi id
        </div>
      </div>
      {/* Services */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        <CustomService />
        <CustomService />
        <CustomService />
        <CustomService />
      </div>
    </div>
  );
}
