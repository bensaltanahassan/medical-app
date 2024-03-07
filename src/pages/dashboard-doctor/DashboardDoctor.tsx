import {
  AiOutlineFileText,
  AiOutlineMessage,
  AiOutlineTeam,
} from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import SideBarItem from "../../components/dashboard/SideBarItem";
import { ImageAssets } from "../../core/classes/ImagesAssets";

export default function DashboardDoctor() {
  return (
    <div className="flex screen-height">
      {/* sidebar */}
      <div className="w-64 rounded-r-lg flex flex-col mr-8 p-6 screen-height">
        {/* header */}
        <div className="flex justify-center items-center m-4 gap-3 text-blue-800">
          <img
            src={ImageAssets.clinic}
            alt="clinic"
            className="w-12 h-12 rounded-full"
          ></img>
          <div className="text-2xl">LiverGuardian</div>
        </div>
        {/* Items */}
        <div className="flex flex-col justify-between mt-7 h-full">
          <div className="flex flex-col gap-5">
            <SideBarItem
              isTabActive={true}
              text="Overview"
              icon={<CgMenuGridR />}
              link="/dashboard-doctor"
            />
            <SideBarItem
              isTabActive={false}
              text="Appointments"
              icon={<FaRegCalendarAlt />}
              link="/dashboard-doctor/appointments"
            />
            <SideBarItem
              isTabActive={false}
              text="Patients"
              icon={<AiOutlineTeam />}
              link="/dashboard-doctor/patients"
            />

            <SideBarItem
              isTabActive={false}
              text="Documents"
              icon={<AiOutlineFileText />}
              link="/dashboard-doctor/documents"
            />

            <SideBarItem
              isTabActive={false}
              text="Messages"
              icon={<AiOutlineMessage />}
              link="/dashboard-doctor/messages"
            />
          </div>
          <div className="flex flex-col gap-5">
            <SideBarItem
              isTabActive={false}
              text="Notifications"
              icon={<IoMdNotificationsOutline />}
              link="/dashboard-doctor/notifications"
            />
            <SideBarItem
              isTabActive={false}
              text="Settings"
              icon={<CiSettings />}
              link="/dashboard-doctor/settings"
            />
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="bg-slate-200 w-full">
        <div></div>
      </div>
    </div>
  );
}
