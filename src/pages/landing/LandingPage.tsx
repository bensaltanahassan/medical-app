import Hero from "../../components/landing/hero/hero";
import StatisticsSection from "../../components/landing/statistics/StatisticsSection";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <div
        className="flex flex-wrap justify-center
            items-center gap-4 p-4 text-white
            bg-green-50
      "
      >
        <StatisticsSection
          title="24/6"
          desc="Online Support"
          className="bg-green-950"
        />
        <StatisticsSection
          title="1000+"
          desc="Happy Customers"
          className="bg-green-600"
        />
        <StatisticsSection
          title="100+"
          desc="Doctors"
          className="bg-green-950"
        />
        <StatisticsSection
          title="10K+"
          desc="Appointments"
          className="bg-green-600"
        />
      </div>
    </div>
  );
}
