export default function StatisticsSection({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`p-6 rounded-md bg-green-600 text-white items-center justify-center w-40 h-2/6 ${className}`}
    >
      <div className="text-center">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-sm"> {desc}</div>
      </div>
    </div>
  );
}
