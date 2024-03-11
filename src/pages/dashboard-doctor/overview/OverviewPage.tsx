import { Chart } from "react-google-charts";
import { CiCalendar, CiHospital1 } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoDocumentTextOutline, IoPersonOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import OveriewAppoitementRequest from "../../../components/dashboard/overview/OveriewAppoitementRequest";
import OveriewAppoitementToday from "../../../components/dashboard/overview/OverviewAppoitementToday";
import OverviewCard from "../../../components/dashboard/overview/OverviewCard";

export const data = [
  ["Gender", "Number of Patients"],
  ["Male", 20021],
  ["Female", 10021],
];

export default function OverviewPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="text-2xl font-bold">Welcome M.BENSALTANA</div>
        <div className="text-sm font-semibold text-slate-600">
          Have a nice day at great work!
        </div>
      </div>
      <div className="flex justify-between mt-4 flex-wrap gap-y-3">
        <OverviewCard
          title="Appointements"
          value="24.4K"
          color="#7A6EFF"
          Icon={CiCalendar}
        />
        <OverviewCard
          title="Patients"
          value="10.4K"
          color="#FF6B72"
          Icon={RiGroupLine}
        />
        <OverviewCard
          title="Consultations"
          value="24.4K"
          color="#FFA94D"
          Icon={CiHospital1}
        />
        <OverviewCard
          title="Documents"
          value="24.4K"
          color="#4CC9F0"
          Icon={IoDocumentTextOutline}
        />
      </div>
      <div className="flex mt-4 gap-x-4">
        {/*Recent Appoitement Requests */}
        <div className="w-1/3">
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-gray-800">
              Appointements
            </div>
            <div className="flex justify-center items-center cursor-pointer text-blue-800 font-semibold text-sm">
              View All
              <IoIosArrowForward />
            </div>
          </div>
          <div className="bg-white rounded-lg pl-2 pr-1 py-4 mt-4 flex flex-col gap-3 ">
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male, 24 years old, 10H00"
              status="pending"
            />
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="BENSALTANA Hassan"
              subtitle="Male, 22 years old, 12H00"
              status="accepted"
            />
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="Hasna Anas"
              subtitle="Male, 22 years old, 12H00"
              status="rejected"
            />
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male, 24 years old, 10H00"
              status="pending"
            />
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male, 24 years old, 10H00"
              status="pending"
            />
            <OveriewAppoitementRequest
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male, 24 years old, 10H00"
              status="pending"
            />
          </div>
        </div>
        {/* Patients */}
        <div className="w-1/3 ">
          <div className="">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-gray-800">
                Patients
              </div>
              <div className="flex justify-center items-center cursor-pointer text-blue-800 font-semibold text-sm bg-slate-100 rounded-md px-3 py-1 gap-x-1">
                2020
                <IoIosArrowDown />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <div
                    className="w-12 h-12 bg-slate-100 rounded-full flex justify-center items-center"
                    style={{ color: "#7A6EFF" }}
                  >
                    <IoPersonOutline />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-800">24.2K</div>
                    <div className="text-sm text-slate-600">New Patients</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm  flex items-center text-blue-800">
                    <MdShowChart />
                    15%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-gray-800">Genders</div>
              <div className="flex justify-center items-center cursor-pointer text-blue-800 font-semibold text-sm bg-slate-100 rounded-md px-3 py-1 gap-x-1">
                2020
                <IoIosArrowDown />
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 mt-4">
              <div className="h-36 w-full">
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={{
                    pieHole: 0.4,
                    slices: [
                      {
                        color: "#7A6EFF",
                      },
                      {
                        color: "#FF6B72",
                      },
                    ],
                    pieSliceTextStyle: {
                      color: "black",
                    },
                  }}
                  width={"100%"}
                  height={"100%"}
                  graph_id="PieChart"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Today Appoiment */}
        <div className="w-1/3">
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-gray-800">
              Today Appointements
            </div>
            <div className="flex justify-center items-center cursor-pointer text-blue-800 font-semibold text-sm">
              View All
              <IoIosArrowForward />
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mt-4 flex flex-col gap-3">
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="CHEBEL Abdelhamid"
              subtitle="Male"
              date="10H00"
            />
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male"
              date="11H00"
            />
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="BENSALTANA Hassan"
              subtitle="Male"
              date="12H00"
            />
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="CHEBEL Abdelhamid"
              subtitle="Male"
              date="10H00"
            />
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="ELAIDI Mohamed"
              subtitle="Male"
              date="11H00"
            />
            <OveriewAppoitementToday
              image="https://placebeard.it/640x360"
              title="BENSALTANA Hassan"
              subtitle="Male"
              date="12H00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
