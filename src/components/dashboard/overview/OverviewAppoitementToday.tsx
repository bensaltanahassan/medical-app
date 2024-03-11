interface OveriewAppoitementTodayProps {
  image: string;
  title: string;
  subtitle: string;
  date: string;
}

export default function OveriewAppoitementToday({
  title,
  image,
  subtitle,
  date,
}: OveriewAppoitementTodayProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-2">
        <img src={image} alt="patient" className="w-12 h-12 rounded-full"></img>
        <div className="flex flex-col">
          <div className="font-semibold text-sm text-gray-800">{title}</div>
          <div className="text-xs text-slate-600">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm" style={{ color: "#7A6EFF" }}>
        {date}
      </div>
    </div>
  );
}
