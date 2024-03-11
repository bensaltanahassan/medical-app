interface RowProps {
  name: string;
  id: string;
  date: string;
  time: string;
  gender: string;
  status: string;
}

export default function Row({
  name,
  id,
  date,
  time,
  gender,
  status,
}: RowProps) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{time}</td>
      <td className="px-6 py-4">{gender}</td>
      <td className="px-6 py-4">{status}</td>
    </tr>
  );
}
