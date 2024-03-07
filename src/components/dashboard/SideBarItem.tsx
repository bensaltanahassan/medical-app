import { useNavigate } from "react-router-dom";

interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  isTabActive: boolean;
}

export default function SideBarItem(props: SideBarItemProps) {
  const navigation = useNavigate();
  const handleTabClick = () => {
    navigation(props.link);
  };
  return (
    <div
      className={`flex items-center justify-start gap-3 rounded-2xl py-1 font-semibold pl-4 text-base cursor-pointer
            ${props.isTabActive ? "bg-blue-200" : ""}  
            ${props.isTabActive ? "text-blue-900" : "text-slate-500"}
      `}
      onClick={handleTabClick}
    >
      {props.icon}
      <div>{props.text}</div>
    </div>
  );
}
