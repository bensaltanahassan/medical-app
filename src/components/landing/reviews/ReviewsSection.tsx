import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ReviewsSection() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="text-center font-semibold">What Our Client's Say</div>
        <div className="text-center text-sm text-gray-500 sm:w-2/3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          distinctio voluptatem saepe tempore, optio numquam commodi reiciendis
        </div>
      </div>
      <div className="flex gap-8 mb-8">
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800">
          <SlArrowLeft />
        </button>
        {/* Comment */}
        <div className="rounded-xl border-2 border-gray-200 px-8 py-4">
          {/* Infos */}
          <div className="mb-3">
            {/* Name */}
            <div className="font-semibold">Bensaltana Hassan</div>
            {/* Date */}
            <div className="text-sm text-gray-500">24/02/2024</div>
          </div>
          {/* Comment */}
          <div className="text-sm text-gray-500 text-start mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sequi, saepe repudiandae iure distinctio temporibus atque quo, rerum
            beatae nihil quidem. Accusantium numquam rerum nihil doloremque
            obcaecati aliquid cum nesciunt?
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800">
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
