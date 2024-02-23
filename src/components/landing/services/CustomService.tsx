export default function CustomService() {
  return (
    <div className="w-56 rounded-lg border-2 border-gray-200 p-6">
      {/* Icon */}
      <div>
        <img alt="" src="images/doctor.png" width={50} height={50} />
      </div>
      {/* title */}
      <div className="text-xl font-bold text-start mb-2 text-green-600">
        Conseilling
      </div>
      {/* Desc */}
      <div className="text-sm text-gray-500 text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci
        officiis deserunt odit eveniet iusto sed, consequatur explicabo
      </div>
    </div>
  );
}
