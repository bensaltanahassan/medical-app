import StatisticsELement from "./StatisticsElement";

export default function SataticsSection() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 text-white bg-green-50">
      <StatisticsELement
        title="24/6"
        desc="Online Support"
        className="bg-green-950"
      />
      <StatisticsELement
        title="1000+"
        desc="Happy Customers"
        className="bg-green-600"
      />
      <StatisticsELement title="100+" desc="Doctors" className="bg-green-950" />
      <StatisticsELement
        title="10K+"
        desc="Appointments"
        className="bg-green-600"
      />
    </div>
  );
}
