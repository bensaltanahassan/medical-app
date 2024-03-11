import React from "react";

interface OverviewCardProps {
  title?: string;
  value?: string;
  color?: string;
  Icon: React.ComponentType<{ className: string }>;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  color,
  Icon,
}) => {
  return (
    <div
      className={`rounded-lg h-24 w-56 flex items-center justify-center text-white gap-4`}
      style={{ backgroundColor: color }}
    >
      <div className="rounded-full p-3 bg-slate-300 h-12 w-12 flex items-center justify-center">
        <Icon className="h-full w-full" />
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-semibold">{value}</div>
        <div className="text-sm font-semibold text-slate-50">{title}</div>
      </div>
    </div>
  );
};

export default OverviewCard;
