import { ImageAssets } from "../../core/classes/ImagesAssets";

export default function NotificationService() {
  return (
    <div className="flex items-center justify-start color-4 w-full py-10 px-6 rounded-lg">
      <div className="sm:w-2/3 ">
        <div
          className="text-3xl font-semibold mb-4"
          style={{ color: "##023047" }}
        >
          Notification System
        </div>
        <div className="text-lg text-white flex flex-col gap-2 list-disc">
          <li>
            Stay informed with a notification system for important updates,
            appointment reminders, and personalized health tips.
          </li>
          <li>
            Receive timely notifications about the latest medical news,
            breakthroughs, and advancements in liver cancer research and
            treatments.
          </li>
        </div>
      </div>
      <div className="sm:w-1/3 hidden sm:flex">
        <img
          src={ImageAssets.service3}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
