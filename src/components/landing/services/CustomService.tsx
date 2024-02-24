export default function CustomService({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="w-56 h-56 rounded-lg border-2 border-gray-200 p-6">
      {/* Icon */}
      <div>
        <img alt="" src={image} width={50} height={50} />
      </div>
      <div className="text-xl font-bold text-start mb-2 text-green-600">
        {title}
      </div>
      {/* Desc */}
      <div className="text-sm text-gray-500 text-start">{desc}</div>
    </div>
  );
}
