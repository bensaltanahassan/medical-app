interface PaginatorNumberProps {
  page: number;
}

export default function PaginatorNumber(props: PaginatorNumberProps) {
  return (
    <li className="cursor-pointer">
      <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {props.page}
      </div>
    </li>
  );
}
