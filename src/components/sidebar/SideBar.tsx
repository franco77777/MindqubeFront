import {
  BarChart3,
  FolderTree,
  ListChecks,
  UserCheck,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItems";
import { useAppSelector } from "../../utils/hooks";
import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

const Sidebar = () => {
  const expanded = useAppSelector((state) => state.utils.sideBarIsEnabled);
  //const [Test, setTest] = useState(true);

  const expandedDelay = useSignal(true);

  useEffect(() => {
    // if (expanded) {
    //   setTest(true);
    // } else {
    //   setTimeout(() => {
    //     setTest(false);
    //   }, 1000);
    // }
    expanded
      ? (expandedDelay.value = true)
      : setTimeout(() => {
          expandedDelay.value = false;
        }, 1000);
  }, [expanded]);
  return (
    <>
      <aside
        //min-h-[calc(100vh-4rem)] mt-16
        //${expandedDelay.value ? "w-24" : "w-0"}
        // ${expanded ? "w-24" : expandedDelay.value ? "w-24" : "w-0"}
        className={`ml-[10px]   ease-in-out transition-all duration-1000 
      ${expandedDelay.value ? "w-24" : "w-0 "}
       `}
      >
        <nav className="h-full  bg-none border-r shadow-sm">
          <ul className="flex flex-col justify-center items-center px-1  bg-none">
            <SidebarItem
              icon={<BarChart3 />}
              text={"test"}
              url={"/"}
              delay={"100"}
            />
            <SidebarItem
              icon={<BarChart3 />}
              text={"test2"}
              url={"/test2"}
              delay={"250"}
            />
            <SidebarItem
              icon={<UserCheck />}
              text={"test3"}
              url={"/test3"}
              delay={"350"}
            />
            <SidebarItem
              icon={<UserCheck />}
              text={"test3"}
              url={"/test3"}
              delay={"500"}
            />
            <SidebarItem
              icon={<UserCheck />}
              text={"test3"}
              url={"/test3"}
              delay={"650"}
            />
            <SidebarItem
              icon={<UserCheck />}
              text={"test3"}
              url={"/test3"}
              delay={"850"}
            />
            <SidebarItem
              icon={<UserCheck />}
              text={"test3"}
              url={"/test3"}
              delay={"1000"}
            />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
