interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
  isTabActive: boolean;
}

export default function SideBarItem(props: SideBarItemProps) {
  return (
    <div
      className={`flex items-center justify-start gap-3 rounded-2xl py-1 font-semibold pl-4 text-base
            ${props.isTabActive ? "bg-blue-200" : ""}  
            ${props.isTabActive ? "text-blue-900" : "text-slate-500"}
      `}
    >
      {props.icon}
      <div>{props.text}</div>
    </div>
  );
}
