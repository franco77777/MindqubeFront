import { useAppSelector } from "../../utils/hooks";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { LucideIcon } from "../../types/navBarType";

export default function SidebarItem({ icon, text, url, delay }: LucideIcon) {
  const expanded = useAppSelector((state) => state.utils.sideBarIsEnabled);
  const currentUrl = useLocation();

  return (
    <li
      style={{ animationDelay: `${delay}ms` }}
      className={` w-24 sidebar__icon--border-bottom  bg-red-600 rounded ${
        expanded ? " sidebar__move--right" : " sidebar__move--left"
      } `}
    >
      <Link
        to={url}
        className={`
          sidebar__icon--animation-hover text-sm mx-1 
           flex flex-col items-center py-2  my-1
          font-light rounded-md cursor-pointer
          transition-all
          ease-in-out 
          
          ${
            currentUrl.pathname === url
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}
