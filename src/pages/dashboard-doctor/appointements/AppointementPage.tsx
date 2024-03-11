import Paginator from "../../../components/dashboard/appointement/Paginator";
import Row from "../../../components/dashboard/appointement/Row";

const header = [
  "Patient Name",
  "Patient Id",
  "Date",
  "Time",
  "Gender",
  "Status",
];

export default function AppointementPage() {
  return (
    <div>
      <div className="flex mb-4">
        <div className="flex flex-col w-1/3 justify-start items-start">
          <div>Patient</div>
          <form className="w-full">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50  focus:outline-none "
                placeholder="Search"
                required
              />

              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-0 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Table */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {header.map((item, index) => (
                <th key={index} className="font-semibold text-gray-600 p-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <Row
                name="John Doe"
                id="123456"
                date="12/12/2021"
                time="12:00 PM"
                gender="Male"
                status="Pending"
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-2">
          <Paginator />
        </div>
      </div>
    </div>
  );
}
