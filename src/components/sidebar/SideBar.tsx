import {
  BarChart3,
  FolderTree,
  ListChecks,
  UserCheck,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItems";
import { useAppSelector } from "../../utils/hooks";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

const Sidebar = () => {
  const expanded = useAppSelector((state) => state.utils.sideBarIsEnabled);
  const expandedDelay = useSignal(true);

  useEffect(() => {
    expanded
      ? (expandedDelay.value = true)
      : setTimeout(() => {
          expandedDelay.value = false;
        }, 300);
  }, [expanded]);
  console.log("render sidebar");

  return (
    //ml-[10px]
    <>
      <aside
        className={` relative bg-yellow-600  ease-in-out transition-all duration-300 
     
       `}
      >
        <div
          className={` ease-in-out transition-all duration-300
          ${expandedDelay.value ? "w-24" : "w-0 "} `}
        >
          <nav className="h-full fixed top-20  bg-none border-r shadow-sm">
            <ul className="flex flex-col justify-center items-center px-1  bg-none">
              <SidebarItem
                icon={<BarChart3 />}
                text={"test"}
                url={"/"}
                delay={"0"}
              />
              <SidebarItem
                icon={<BarChart3 />}
                text={"test2"}
                url={"/test2"}
                delay={"100"}
              />
              <SidebarItem
                icon={<UserCheck />}
                text={"test3"}
                url={"/test3"}
                delay={"150"}
              />
              <SidebarItem
                icon={<UserCheck />}
                text={"test3"}
                url={"/test3"}
                delay={"220"}
              />
              <SidebarItem
                icon={<UserCheck />}
                text={"test3"}
                url={"/test3"}
                delay={"300"}
              />
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
