import { useLocation } from "react-use";
import { useAppSelector } from "../../utils/hooks";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

export default function SidebarItem({ icon, text, active, url, delay }) {
  const expanded = useAppSelector((state) => state.utils.sideBarIsEnabled);
  const currentUrl = useLocation();

  return (
    <li
      style={{ animationDelay: `${delay}ms` }}
      className={` w-24 sidebar__icon--border-bottom  bg-red-600 ${
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
