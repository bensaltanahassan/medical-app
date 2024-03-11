import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

interface OveriewAppoitementRequestProps {
  image: string;
  title: string;
  subtitle: string;
  status: string;
}

export default function OveriewAppoitementRequest({
  title,
  image,
  subtitle,
  status,
}: OveriewAppoitementRequestProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-2">
        <img src={image} alt="patient" className="w-12 h-12 rounded-full"></img>
        <div className="flex flex-col">
          <div className="font-semibold text-sm text-gray-800">{title}</div>
          <div className="text-xs text-slate-600">{subtitle}</div>
        </div>
      </div>
      <div>
        {status === "pending" && (
          <div className="flex gap-x-2">
            <div
              className="text-sm text-green-800 cursor-pointer bg-slate-100 rounded-md px-2 py-1"
              style={{ color: "#7A6EFF" }}
            >
              Accept
            </div>
            <div
              className="text-sm text-red-800 cursor-pointer bg-slate-100 rounded-md px-2 py-1"
              style={{ color: "#FF6B72" }}
            >
              Reject
            </div>
          </div>
        )}
        {status === "accepted" && (
          <div
            className="text-sm rounded-sm bg-slate-100 p-1 mr-4 cursor-pointer"
            style={{ color: "#7A6EFF" }}
          >
            <IoCheckmarkOutline size={16} />
          </div>
        )}
        {status === "rejected" && (
          <div
            className="text-sm rounded-sm bg-slate-100 p-1 mr-4 cursor-pointer"
            style={{ color: "#FF6B72" }}
          >
            <IoCloseOutline size={16} />
          </div>
        )}
      </div>
    </div>
  );
}
