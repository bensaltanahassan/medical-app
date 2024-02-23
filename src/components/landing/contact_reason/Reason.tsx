import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Reason({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border-l-2 border-gray-800 pl-4 flex flex-col items-start justify-start">
      <div className="flex flex-row justify-start items-center gap-4">
        <div className="text-green-600">{title}</div>
        <IoCheckmarkCircleOutline className="text-green-600" />
      </div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
}
