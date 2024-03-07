import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar/SideBar";

export default function DashboardDoctor() {
  return (
    <div className="flex screen-height">
      {/* sidebar */}
      <SideBar />
      {/* main content */}
      <div className="bg-slate-200 w-full">
        <Outlet />
      </div>
    </div>
  );
}
