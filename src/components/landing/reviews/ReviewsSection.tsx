import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ReviewsSection() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="text-center font-semibold">What Our Client's Say</div>
        <div className="text-center text-sm text-gray-500 sm:w-2/3">
          Explore the experiences of individuals who have entrusted us with
          their liver cancer care. Read firsthand testimonials from our valued
          clients who have found comfort and confidence in our personalized
          treatment plans, advanced technology, and the unwavering dedication of
          our professional team.
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
          <div className="text-sm text-gray-500 text-start">
            Choosing this clinic for liver cancer care was the best decision I
            made. The personalized treatment plans, advanced technology, and a
            dedicated team of professionals created a comforting environment.
            They truly prioritize the well-being of their patients.
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800">
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
